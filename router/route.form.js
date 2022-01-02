const express = require('express');
const formController = require('../controllers/controller.form');
const formMiddleware = require('../middlewares/middleware.form');
const router = express.Router();

router.get("/", (req, res) => {
    session = req.session;
    if (session.userid) {
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    } else
        res.render('index');
});

router.get("/login", formController.logPage);
router.post('/logOut_form', formController.logOut);
router.get('/userHome', formMiddleware.redirectLogin, formController.userPage);
router.post('/formSignin', formController.signIn);
router.post('/login_form', formController.logIn);
router.get('/password', formMiddleware.redirectLogin, formController.passwordPage);
router.post('/password_form', formController.changePassword)
router.get('/profil', formMiddleware.redirectLogin, formController.profilPage);
router.post('/profilUser_form', formController.saveProfil);




module.exports = router;


