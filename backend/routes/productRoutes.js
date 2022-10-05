import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
// import Review from '../models/productModel.js'

const productRouter = express.Router()

productRouter.get('/', async(req,res) => {
    const products = await Product.find()
    res.send(products)
})

productRouter.get('/slug/:slug', async (req,res) => {
    const product = await Product.findOne({slug: req.params.slug})
    if(product){
        res.send(product)
    }
    else{
        res.status(404).send({message: 'Product not found'})
    }
})

productRouter.get('/:id', async (req,res) => {
    const product = await Product.findById( req.params._id)
    if(product){
        res.send(product)
    }
    else{
        res.status(404).send({message: 'Product not found'})
    }
})

productRouter.post('/reviews', expressAsyncHandler(async(req,res) => {
    // const newReview = new Review({
    //     name: req.body.name,
    //     review: req.body.review
    // })
    const newReview = {name: req.body.name, review: req.body.review, rating: req.body.rating}
    const query = {"_id": req.body.id}
    const updateDocument = {
        $push: {"reviews": newReview}
    }
    const result = await Product.updateOne(query, updateDocument)
    // Product.updateOne(
    //     {_id:req.body.id},
    //     {$push: {reviews: newReview}}
    // )
}))



export default productRouter