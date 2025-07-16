const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.get('/', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

router.post('/', async (req, res) => {
  const { brand, model } = req.body;
  const car = new Car({ brand, model });
  await car.save();
  res.status(201).json(car);
});

router.delete('/:id', async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

router.put('/:id', async (req, res) => {
  const { brand, model } = req.body;
  const updatedCar = await Car.findByIdAndUpdate(
    req.params.id,
    { brand, model },
    { new: true }
  );
  res.json(updatedCar);
});

module.exports = router;