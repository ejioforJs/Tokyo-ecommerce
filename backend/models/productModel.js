import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  name: {type: String, required: true},
  review: {type: String, required: true},
  rating: {type: Number, required: true}
}, {
  timestamps: true
})

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    component: {type: String, required: true},
    image1: { type: String, required: true },
    image2: {type: String, required: true},
    image3: {type: String, required: true},
    image4: {type: String, required: true},
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    deepInfo: {type: String, required: true},
    specifications: {type: Object, required:true},
    reviews: [reviewSchema]
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema)

export default Product
