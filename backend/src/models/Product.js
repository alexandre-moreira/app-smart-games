import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nameGame: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    linkImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    platarforms: {
        type: String,
        required: true
    },
    stores: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

export default mongoose.model('Product', productSchema)