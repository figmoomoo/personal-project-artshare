const bcrypt = require("bcryptjs");

module.exports = {
    getAllArt: (req, res) => {
        const db = req.app.get('db')
        db.posts.get_all_posts().then(artPosts => {
            res.status(200).send(artPosts)
        })
    },
    getUserArt: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.posts.get_user_post(id).then(artPosts => {
            console.log(artPosts)
            res.status(200).send(artPosts)
        })
    },
    getArtById: (req, res) => {
        const db = req.app.get('db')
        db.posts.get_user_art().then(artPosts => {
            res.status(200).send(artPosts)
        })
    },
    addArt: async (req, res) => {
        const db = req.app.get('db')
        const {title, description, image} = req.body;
        const artPosts = await db.posts.create_post([title, description, image])
        res.status(200).send(artPosts)
    }
}