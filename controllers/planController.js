import Plan from "../models/Plan.js";

export const createPlan = async (req, res) => {
    try {
        //initallly addign the store into database
        const plan = new Plan(req.body);
        await plan.save();
        res.status(201).json({
            plan_id: plan._id,
            store_location: plan.store_location,
            success:true,
            message: 'Plan created Successfully', Store
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