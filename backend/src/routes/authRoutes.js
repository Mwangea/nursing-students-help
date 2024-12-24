const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
const { registerValidation, loginValidation } = require('../middleware/validate');
const passport = require('../config/passport');
const { generateAuthToken } = require('../services/tokenService');

router.post('/register', registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.get('/profile', auth, authController.getProfile);

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        const token = generateAuthToken(req.user);
        res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
    }
);

router.get('/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
);

router.get('/facebook/callback',
    passport.authenticate('facebook', { session: false }),
    (req, res) => {
        const token = generateAuthToken(req.user);
        res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
    }
);

module.exports = router;