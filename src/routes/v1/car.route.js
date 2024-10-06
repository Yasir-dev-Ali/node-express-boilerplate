const express = require('express');
const validate = require('../../middlewares/validate');
const {carValidation} = require('../../validations');
const {carController} = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/create', validate(carValidation.createCat), carController.createCar);
router.get('/get', validate(carValidation.getCar), carController.getCar);

module.exports = router;
