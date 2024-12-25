const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, cb) => {
    try {
        let user = await User.findByProviderId('google', profile.id);
        if (!user) {
            user = await User.create({
                name: `${profile.displayName}`,
                email: profile.emails[0].value,
                provider: 'google',
                providerId: profile.id
            });
        }
        return cb(null, user);
    } catch (error) {
        return cb(error, null);
    }
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