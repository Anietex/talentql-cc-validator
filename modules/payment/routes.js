const express = require('express');
const router = express.Router();
const PaymentController = require('./controllers/PaymentController');

const paymentController = new PaymentController();


router.get('/validate', paymentController.validate);

module.exports = router
