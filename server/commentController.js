const bcrypt = require("bcryptjs");

module.exports = {
    getPostComments: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.comments.get_post_comment(id).then(artPostComments => {
            res.status(200).send(artPostComments)
        })
    },
    getCommentsById: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.comments.get_comment(id).then(artPostComments => {
            res.status(200).send(artPostComments)
        })
    },
    addComment: async (req, res) => {
        const db = req.app.get('db')
        const {comment, comment_points, comment_id, user_id} = req.body;
        const artPostComments = await db.comments.create_comment([comment, comment_points, comment_id, user_id])
        res.status(200).send(artPostComments)
    },
    deleteComment: async (req, res) => {
        const db = req.app.get('db');
        const {id} = rq.params;
        const artPostComments = await db.comments.delete_comment(id)
        res.status(200).send(artPostComments)
    },
    updateComment: async (req, res) => {
        const db = req.app.get('db')
        const {comment} = req.body;
        const {id} = req.params;
        const artPostComments = await db.comments.edit_comment(id, comment).then(artPostComments => {
            res.status(200).send(artPostComments)
        })
    }
}