const { Service } = require('../models');

exports.createService = async (req, res) => {
  const { title, description, price } = req.body;

  const service = await Service.create({
    title,
    description,
    price,
    adviserId: req.user.id,
  });

  res.status(201).json(service);
};

// Add other adviser-related functionalities here
