const Publication = require('../model/pubilcation.model');
const User = require('../model/users.model');

const actuPage = async (req, res) => {
    let session = req.session;
    if (session.userid) {
        let user = await User.findById(session.userid);
        res.render('fil-actu', { user });
    }


    res.redirect('/login');
}

const postActu = (req, res) => {

}

module.exports = {
    actuPage,
    postActu
}