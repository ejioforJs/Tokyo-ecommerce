import express from 'express'
import Blog from '../models/blogModel.js'

const blogRouter = express.Router()

blogRouter.get('/', async(req,res) => {
    const blogs = await Blog.find()
    res.send(blogs)
})

export default blogRouter