const { validationResult, check } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

const registerValidation = [
    check('name').trim().notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
    validate
];

const loginValidation = [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').notEmpty().withMessage('Password is required'),
    validate
];

module.exports = {
    registerValidation,
    loginValidation
};