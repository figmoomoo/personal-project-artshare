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
            // console.log(artPosts)
            res.status(200).send(artPosts)
        })
    },
    getArtById: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.posts.get_post(id).then(artPosts => {
            // console.log(artPosts)
            res.status(200).send(artPosts)
        })
    },
    addArt: async (req, res) => {
        const db = req.app.get('db')
        const {title, description, image, post_points, author_id} = req.body;
        const artPosts = await db.posts.create_post([title, description, image, post_points, author_id])
        res.status(200).send(artPosts)
    },
    updateArt: async (req, res) => {
        const db = req.app.get('db')
        const {title, description} = req.body;
        const {id} = req.params;
        const artPosts = await db.posts.edit_post(id, title, description).then(artPosts => {
            res.status(200).send(artPosts)
        })
    },
    deleteArt: async (req,res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const artPosts = await db.posts.delete_post(id)
        res.status(200).send(artPosts)
    },
    image: async (req, res) => {
        const db = req.app.get('db');
        const {image} = req.body;
        const {post_id} = req.params;
        await db.posts.s3update_post({image, post_id})
        res.sendStatus(200)
    }
}