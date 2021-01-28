import jwt from 'jsonwebtoken';
import User from '../models/User1';

export function requireAuth(req, res, next) {
    const token = req.cookies.jwt;

    //check json web token exists & verified

    if(token) {
        jwt.verify(token, 'secret string songster', (err, decodedToken) => {
            if(err) {
                console.log(err.message)
                res.redirect('/login')
            } else {
                console.log(decodedToken)
                next()
            }
        })
    }
    else {
        res.redirect('/login');
    }
}


export function checkUser(req, res, next) {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'secret string songster', async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                res.locals.user = await User.findById(decodedToken.id);
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
}