
const User = require('../model/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signIn = (req, res, next) => {
    if (req.body.pass === req.body.pass2) {
        bcrypt.hash(req.body.pass, 10).then(hash => {
            const user = new User({
                prenom: req.body.prenom,
                nom: req.body.nom,
                email: req.body.email,
                numero: req.body.tele,
                profil: req.body.profil,
                secret: hash
            });
            user.save().then(
                () => {
                    res.status(201).json({
                        message: 'user saved successfully!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            )
        }).catch(
            error => {
                res.status(500).json({
                    error
                });
            }
        )
    }else{
        res.status(400).json({
            message: 'the password and confirm password not match'
        });
    }    
}

const logIn = (req, res, next) => {
    User.findOne({ email: req.body.email, profil: req.body.profil })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé' })
            }
            bcrypt.compare(req.body.pass, user.secret)
                .then(matchPass => {
                    if (!matchPass) {
                        return res.status(401).json({ error: 'Mot de pass incorrect' });
                    }else
                    if (user.etat !== 'actif') {
                        return res.status(400).json({ error: 'Ce compte n\'existe pas ou est desactivé' })
                    }
                    let auth = {
                        username: user.prenom + ' ' + user.nom,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    }
                    res.status(200).redirect('/userHome');
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

const userPage = (req, res, next) => {
    res.render('user-home')
}

const logOut = (req, res, next) => {
    res.redirect('/login')
}



module.exports = {
    signIn,
    logIn,
    logOut,
    userPage
}