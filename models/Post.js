const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    header: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;