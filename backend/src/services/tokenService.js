const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateAuthToken = (user) => {
    return jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
};

const generateResetToken = () => {
    return crypto.randomBytes(32).toString('hex');
};

module.exports = {
    generateAuthToken,
    generateResetToken
};