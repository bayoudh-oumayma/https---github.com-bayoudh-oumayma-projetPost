const express = require('express');
const postsController = require('./postsController');

const router = express.Router();

router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/add', postsController.addPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;
