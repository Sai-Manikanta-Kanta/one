const express = require('express');
const Post = require('./schema');
const router = express.Router();

router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/post', async (req, res) => {
    
    let date=Date.now()
    
    const post = new Post({
        name: req.body.name,
        location: req.body.location,
        likes: req.body.likes,
        description: req.body.description,
        postImage: req.body.postImage,
        date:new Date(date).toISOString().split('T')[0],
    });
    try {
        const savedPost = await post.save();
        savedPost.populate('date');
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router