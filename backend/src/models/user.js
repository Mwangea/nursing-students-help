const db = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
    static async create({ name, email, password, role = 'user', provider = null, providerId = null }) {
        const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
        const [result] = await db.execute(
            'INSERT INTO users (name, email, password, role, provider, provider_id) VALUES (?, ?, ?, ?, ?, ?)',
            [name, email, hashedPassword, role, provider, providerId]
        );
        return result.insertId;
    }

    static async findByEmail(email) {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    }

    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    static async findByProviderId(provider, providerId) {
        const [rows] = await db.execute(
            'SELECT * FROM users WHERE provider = ? AND provider_id = ?',
            [provider, providerId]
        );
        return rows[0];
    }

    static async findAdmin() {
        const [rows] = await db.execute('SELECT * FROM users WHERE role = ?', ['admin']);
        return rows[0];
    }

    static async updatePassword(userId, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.execute(
            'UPDATE users SET password = ? WHERE id = ?',
            [hashedPassword, userId]
        );
    }

    static async setResetToken(userId, token, expires) {
        await db.execute(
            'UPDATE users SET reset_token = ?, reset_token_expires = ? WHERE id = ?',
            [token, expires, userId]
        );
    }

    static async findByResetToken(token) {
        const [rows] = await db.execute(
            'SELECT * FROM users WHERE reset_token = ? AND reset_token_expires > NOW()',
            [token]
        );
        return rows[0];
    }
}

module.exports = User;