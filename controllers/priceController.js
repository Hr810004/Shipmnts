import Store from "../models/Store.js";
import Plan from "../models/Plan.js";

export const calculatePrice = async (req, res) => {
    try {
        const { store_location, order_date, length, selections, extras } = req.body;
        //if no store avaiable then return directly
        if (!Store) return res.status(404).json({ error: 'Store not found' });
        const date = new Date(order_date);
        const plan = new Plan.findOne({
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
            if (Store.premium_items.include(name)) price += item.extra_charge;
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

        const tax = (Store.tax_percentage / 100) * total;
        const grandTotal = total + tax;
        

        //sending the response finally
        res.json({
            store_location,
            currency: Store.currency,
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