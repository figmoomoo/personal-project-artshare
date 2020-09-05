const bcrypt = require("bcryptjs");

module.exports = {
    getUserInfo: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.users.get_user_dash(id).then(artUsers => {
            res.status(200).send(artUsers)
        })
    }
}