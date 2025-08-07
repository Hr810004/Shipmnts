import Plan from "../models/Plan.js";
import Store from "../models/Store.js";

export const createPlan = async (req, res) => {
    try {
        // Check if store exists
        const store = await Store.findOne({ store_location: req.body.store_location });
        if (!store) {
            return res.status(400).json({ 
                success: false, 
                message: 'Store not found. Please create the store first.' 
            });
        }

        //initallly addign the store into database
        const plan = new Plan(req.body);
        await plan.save();
        res.status(201).json({
            plan_id: plan._id,
            store_location: plan.store_location,
            success:true,
            message: 'Plan created Successfully', 
            plan
        });
    } catch (err) {
        res.status(500).json({error:err.message});
    }
}


export const getPlanById = async (req, res) => {
    try {   
        const plan = await Plan.findById(req.params.plan_id);
        if (!plan) return res.status(404).json({ error: 'Plan Not found' });
        res.json(plan);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}