const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

const sendPasswordResetEmail = async (email, token) => {
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
    
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Password Reset Request',
        html: `
            <h1>Password Reset</h1>
            <p>Click the link below to reset your password:</p>
            <a href="${resetLink}">Reset Password</a>
            <p>This link will expire in 1 hour.</p>
        `
    });
};

module.exports = {
    sendPasswordResetEmail
};