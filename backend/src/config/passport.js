const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, function(accessToken, refreshToken, profile, cb) {
    // Handle user authentication here
    return cb(null, profile);
}));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'emails', 'name']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findByProviderId('facebook', profile.id);
        if (!user) {
            user = await User.create({
                name: `${profile.name.givenName} ${profile.name.familyName}`,
                email: profile.emails[0].value,
                provider: 'facebook',
                providerId: profile.id
            });
        }
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

module.exports = passport;