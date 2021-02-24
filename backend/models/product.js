const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLenght: [100, 'Product name cannot exceed 100 characters']
    },

    price: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLenght: [100, 'Product name cannot exceed 100 characters']
    },
});

module.exports = mongoose.model('product', productSchema);