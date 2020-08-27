const bcrypt = require("bcryptjs");

module.exports = {
    register: async(req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        console.log(req.body)
        const results = await db.get_user(username)
        if(results[0]){
            return res.status(400).send("Username taken")
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [user] = await db.register_user(username, hash)
        req.session.user = user
        return res.status(200).send(req.session.user)
    },
    login: async(req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const results = await db.get_user(username)
        if(!results[0]){
            return res.status(400).send("User not found")
        }
        const isAuthenticated = bcrypt.compareSync(password, results[0].password)
        if(!isAuthenticated){
            return res.status(400).send("Password incorrect")
        }
        delete results[0].password
        req.session.user = results[0]
        return res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req, res) => {
        if(!req.session.user){
            return res.status(400).send("User not found")
        }
        return res.status(200).send(req.session.user)
    }
}