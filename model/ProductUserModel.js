const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: false },
        image: { type: String, required: true },

        price: { type: Number, required: true },
        address: { type: String, required: true },
        romm: { type: Number, required: true },
        soluong: { type: Number, required: true },
        description: { type: String, required: true },

    },
    {
        timestamps: true
    }
)
const ProductUser = mongoose.model('Productuser', productSchema);
module.exports = ProductUser;