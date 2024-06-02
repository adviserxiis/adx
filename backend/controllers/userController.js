const { Service, Booking } = require('../models');

exports.getServices = async (req, res) => {
  const services = await Service.findAll();
  res.status(200).json(services);
};

exports.bookService = async (req, res) => {
  const { serviceId, date } = req.body;

  const booking = await Booking.create({
    date,
    serviceId,
    userId: req.user.id,
  });

  res.status(201).json(booking);
};

// Add other user-related functionalities here
