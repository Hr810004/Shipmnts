import Store from "../models/Store.js";
import Plan from "../models/Plan.js";

export const calculatePrice = async (req, res) => {
    try {
        const { store_location, order_date, length, selections, extras } = req.body;
        
        // Find the store error after interview till line 10
        const store = await Store.findOne({ store_location });
        if (!store) return res.status(404).json({ error: 'Store not found' });
        
        const date = new Date(order_date);
        //error after interview till line 13
        const plan = await Plan.findOne({
            store_location,
            valid_from: { $lte: date },
            valid_to: { $gte: date }
        });

        //if no plan exist the simply return
        if (!plan) return res.status(404).json({ error: 'Plan not found for valid date' });
        
        let items = [];
        let total = 0;

        const getPrice = (category, name, isExtra = false) => {
            const item = plan.items.find(i => i.category === category && i.name === name);
            if (!item) return null;
            let price = (length === 'half' ? item.half_price : item.full_price);
            //error after interview till line 29
            if (store.premium_items.includes(name)) price += item.extra_charge;
            return { name, price, category, isExtra };
        };

        //for selected items
        for (let cat of Object.keys(selections)) {
            for (let name of selections[cat]) {
                const entry = getPrice(cat, name);
                if (entry) {
                    items.push(entry);
                    total += entry.price;
                }
            }
        }

        for (let cat of Object.keys(extras)) {
            for (let name of extras[cat]) {
                const entry = getPrice(cat, name, true);
                if (entry) {
                    items.push(entry);
                    total += entry.price;
                }
            }
        }

        //error after interview till line 56
        const tax = (store.tax_percentage / 100) * total;
        const grandTotal = total + tax;
        

        //sending the response finally 
        res.json({
            store_location,
            currency: store.currency,
            length,
            items,
            //upto two decimal
            tax: tax.toFixed(2),
            total: grandTotal.toFixed(2)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }  
};