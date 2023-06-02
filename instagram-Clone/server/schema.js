const mongoose = require('./connection');
const postsSchema = new mongoose.Schema({
    name: String,
    location: String,
    likes: Number,
    description: String,
    postImage: String,
    date:String
},);



const Post = mongoose.model('Post', postsSchema);

  
module.exports = Post;
