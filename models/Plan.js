import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    category: String,
    name: String,
    half_price: Number,
    full_price: Number,
    extra_charge: Number,
}, { _id: false });

const planSchema = mongoose.Schema({
    store_location: { type: String, required: true },
    valid_from: { type: Date, required: true },
    valid_to: { type: Date, required: true },
    items: [itemSchema]
});

export default mongoose.model('Plan', planSchema);