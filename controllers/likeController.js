const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = {
    like: function (req, res) {
        let blogId = req.body.blogId

        db.Post.findOne({ where: { id: blogId } })
            .then(result => {
                db.Post.update({
                    likes: parseInt(result.likes) + 1
                },
                    { where: { id: result.id } }
                    ).then(()=>{

                        res.json({ liked: true });
                    })
            })
            .catch(err => res.status(422).json(err));

    }
}