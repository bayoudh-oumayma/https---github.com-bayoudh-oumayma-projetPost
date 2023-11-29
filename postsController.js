const post = require('./postsModels');

exports.getAllPosts = async (req, res) => {
  try {
    const pts = await post.findAll();
    res.json(pts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const pt = await post.findByPk(postId);
    if (!pt) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(pt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addPost = async (req, res) => {
  
  const { title, content } = req.body;
  try {
    console.log("add",{ title, content });
    
    const newPost = await post.create({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  try {
    const pt = await post.findByPk(postId);
    if (!pt) {
      return res.status(404).json({ error: 'Post not found' });
    }
    pt.title = title;
    pt.content = content;
    await pt.save();
    res.json(pt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    await post.destroy();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
