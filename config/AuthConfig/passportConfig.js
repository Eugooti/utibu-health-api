const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/patientModel/patient.model');
const crypto = require('crypto');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['password', 'salt'] } // Exclude sensitive fields
        });
        if (!user) {
            return done(null, false);
        }
        done(null, user);
    } catch (error) {
        done(error);
    }
});

passport.use(
    new LocalStrategy(
        {
            username: 'emailAddress', // Specify the email field
            password: 'password' // Specify the password field
        },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ where: { emailAddress: email } });

                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }

                // Hash the provided password using the stored salt
                const hashedPassword = crypto.createHash('sha256').update(password + user.salt).digest('hex');

                // Compare the hashed password with the stored hashed password
                if (hashedPassword !== user.password) {
                    return done(null, false, { message: 'Invalid Password' });
                }

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

module.exports = passport;
