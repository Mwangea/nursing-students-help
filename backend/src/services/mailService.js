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
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reset Your Password</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                .header {
                    background-color: #ffd700;
                    padding: 20px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                }
                h1 {
                    color: #000000;
                    margin: 0;
                    font-size: 24px;
                }
                .content {
                    padding: 20px;
                    text-align: center;
                }
                p {
                    color: #333333;
                    line-height: 1.6;
                    margin: 10px 0;
                }
                .button {
                    display: inline-block;
                    padding: 12px 30px;
                    background-color: #ffd700;
                    color: #000000;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                    margin: 20px 0;
                    transition: background-color 0.3s ease;
                }
                .button:hover {
                    background-color: #ffed4a;
                }
                .footer {
                    text-align: center;
                    padding-top: 20px;
                    font-size: 12px;
                    color: #666666;
                }
                .divider {
                    height: 1px;
                    background-color: #eeeeee;
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Password Reset</h1>
                </div>
                <div class="content">
                    <p>We received a request to reset your password.</p>
                    <p>Click the button below to create a new password:</p>
                    <a href="${resetLink}" class="button">Reset Password</a>
                    <div class="divider"></div>
                    <p style="font-size: 14px;">This link will expire in 1 hour.</p>
                    <p style="font-size: 14px;">If you didn't request this password reset, you can safely ignore this email.</p>
                </div>
                <div class="footer">
                    <p>This is an automated message. Please do not reply to this email.</p>
                </div>
            </div>
        </body>
        </html>
        `
    });
};

module.exports = {
    sendPasswordResetEmail
};