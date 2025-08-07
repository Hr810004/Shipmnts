const express = require('express');
const { createStore, updateStore } = require('../controllers/StoreControllers');
const { createPlan, getPlanById } = require('../controllers/planController');
const { calculatePrice } = require('../controllers/priceController');
const router = express.Router();


router.post('/store', createStore);
router.put('/store/:store_location', updateStore);
router.post('/plan', createPlan);
router.get('/plan/:plan_id', getPlanById);
router.post('/calculate',calculatePrice);


router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Shipmnts API',
    status: 'ready'
  });
});

module.exports = router; 