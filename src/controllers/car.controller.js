const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { carService } = require('../services');

const createCar = catchAsync(async (req, res) => {
  const car = await carService.createCar(req.body);
  res.status(httpStatus.CREATED).send(car);
});

const getCar = catchAsync(async (req, res) => {
  const car = await carService.getCar(req.query.name);
  res.send(car);
});

module.exports = {
  createCar,
  getCar,
};
