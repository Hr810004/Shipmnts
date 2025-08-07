import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
    store_location: { type: String, required: true, unique: true },
    currency: { type: String, default: 'INR' },
    tax_percentage: { type: Number, default: 6.0 },
    premium_items:[String]
})

export default mongoose.model('Store', storeSchema);