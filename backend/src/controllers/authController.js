const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { generateAuthToken, generateResetToken } = require('../services/tokenService');
const { sendPasswordResetEmail } = require('../services/mailService');

const register = async (req, res) => {
    try {
        const { name, email, password, adminKey } = req.body;

        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        let role = 'user';
        if (adminKey === process.env.ADMIN_REGISTRATION_KEY) {
            const adminExists = await User.findAdmin();
            if (adminExists) {
                return res.status(400).json({ message: 'Admin already exists' });
            }
            role = 'admin';
        }

        const userId = await User.create({ name, email, password, role });
        const user = await User.findById(userId);
        const token = generateAuthToken(user);

        res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateAuthToken(user);
        res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findByEmail(email);

        if (user) {
            const resetToken = generateResetToken();
            const expires = new Date(Date.now() + 3600000); // 1 hour

            await User.setResetToken(user.id, resetToken, expires);
            await sendPasswordResetEmail(email, resetToken);
        }

        res.json({ message: 'If an account exists, password reset instructions have been sent' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body;
        const user = await User.findByResetToken(token);

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        await User.updatePassword(user.id, password);
        await User.setResetToken(user.id, null, null);

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword,
    getProfile
};