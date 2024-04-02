const authConfig = require('../../config/AuthConfig/passportConfig');

const Login = (req, res, next) => {
    authConfig.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).json({ success: false, message: info.message });
        }

        req.login(user, (err) => {
            if (err) {
                return next(err);
            }

            // Set session cookie
            res.cookie('sessionCookie', req.sessionID, {
                httpOnly: true,
                secure: req.secure, // Conditionally set based on request protocol
                sameSite: 'strict'
            });

            return res.status(200).json({
                success: true,
                message: 'Login successful',
                user: user
            });
        });
    })(req, res, next);
};

module.exports = { Login };
