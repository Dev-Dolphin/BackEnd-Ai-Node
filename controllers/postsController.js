// In-memory data store (replace with database in production)
let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post', author: 'John Doe', createdAt: new Date().toISOString() },
  { id: 2, title: 'Second Post', content: 'This is the second post', author: 'Jane Smith', createdAt: new Date().toISOString() },
  { id: 3, title: 'Third Post', content: 'This is the third post', author: 'Bob Johnson', createdAt: new Date().toISOString() }
];

let nextId = 4;

// Get all posts
const getAllPosts = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get post by ID
const getPostById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Post not found'
      });
    }

    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new post
const createPost = (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Basic validation
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        error: 'Title and content are required'
      });
    }

    const newPost = {
      id: nextId++,
      title,
      content,
      author: author || 'Anonymous',
      createdAt: new Date().toISOString()
    };

    posts.push(newPost);

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: newPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update post
const updatePost = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Post not found'
      });
    }

    const { title, content, author } = req.body;
    posts[postIndex] = {
      ...posts[postIndex],
      ...(title && { title }),
      ...(content && { content }),
      ...(author && { author }),
      updatedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      data: posts[postIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Delete post
const deletePost = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Post not found'
      });
    }

    const deletedPost = posts.splice(postIndex, 1)[0];

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
      data: deletedPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};

