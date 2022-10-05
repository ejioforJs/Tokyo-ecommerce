import express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';
import Blog from '../models/blogModel.js'
import User from '../models/userModel.js'

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await Blog.deleteMany({})
  const createdBlogs = await Blog.insertMany(data.blogPosts)
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users)
  res.send({ createdProducts, createdBlogs, createdUsers });
});

export default seedRouter;
