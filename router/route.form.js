const express = require('express');
const formController = require('../controllers/controller.form')
const router = express.Router();

router.get("/", (req, res) => {
   
    res.render('index');
});

router.get("/login", (req, res) => {
    res.render('login');
}); 
router.post('/logOut_form', formController.logOut)
router.get('/userHome', formController.userPage)
router.post('/formSignin', formController.signIn);
router.post('/login_form', formController.logIn);



module.exports = router;


