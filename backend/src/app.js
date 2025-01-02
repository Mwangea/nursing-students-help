const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Environment Variables
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = 'http://localhost:5174';

// Middleware
app.use(cors({
    origin: FRONTEND_URL, // Frontend URL for CORS
    credentials: true, // Allow cookies and credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || 'Something went wrong!' });
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
