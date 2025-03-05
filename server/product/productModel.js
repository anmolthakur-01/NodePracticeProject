const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, default: null },
    price: { type: Number, default: null },
    description: { type: String, default: null },
    categoryId: { type: mongoose.Schema.ObjectId, ref: 'category', default: null },
    createdAt: { type: Date, default: Date.now()},
    status: { type: Boolean, default: true }
});

module.exports = mongoose.model('product', productSchema);