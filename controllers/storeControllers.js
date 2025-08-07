import Store from "../models/Store.js";

export const createStore = async (req, res) => {
    try {
        //initallly addign the store into database
        const store = new Store(req.body);
        await store.save();
        res.status(201).json({ success: true, message: 'Store created Successfully', store });
    } catch (err) {
        res.status(500).json({error:err.message});
    }
}

export const updateStore = async (req, res) => {
    try {
        const store = await Store.findOneAndUpdate(
            { store_location: req.params.store_location },
            req.body,
            { new: true }
        );
        //if not found
        if (!store) return res.status(404).json({ message: 'Store not found' });
        //else
        res.json({ success: true, message: 'Store Updated successfully' });
    } catch (err) {
        res.status(500).json({error:err.message});
    }
}