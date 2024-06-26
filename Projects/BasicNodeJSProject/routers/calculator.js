const express = require('express');

const calculatorRouter = require('../controllers/calculator')

const router = express.Router();

//   /calculator/add
router.post('/add',calculatorRouter.add);

//   /calculator/Subtract
router.post('/Subtract',calculatorRouter.subtract);

//   /calculator/multiply
router.post('/multiply',calculatorRouter.multiply);

//   /calculator/divide
router.post('/divide',calculatorRouter.divide);



module.exports = router;