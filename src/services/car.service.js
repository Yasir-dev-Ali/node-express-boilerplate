const { Car } = require('../models');

const createCar = async (req) => {
    const car = await Car.create(req);
    return car;
}

const getCar = async (name) => {
    return await Car.findOne({
        name
    });
}

module.exports = {
    createCar,
    getCar
};