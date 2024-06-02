const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Adviser } = require('../models');

exports.userSignup = async (req, res) => {
  const { username, email, password } = req.body;

  let user = await User.findOne({ where: { email } });
  if (user) return res.status(400).json({ message: 'User already exists.' });

  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({ username, email, password: hashedPassword });

  const token = jwt.sign({ id: user.id, role: 'user' }, process.env.JWT_SECRET);
  res.status(201).json({ token });
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: 'Invalid email or password.' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid email or password.' });

  const token = jwt.sign({ id: user.id, role: 'user' }, process.env.JWT_SECRET);
  res.status(200).json({ token });
};

exports.adviserSignup = async (req, res) => {
  const { username, email, password } = req.body;

  let adviser = await Adviser.findOne({ where: { email } });
  if (adviser) return res.status(400).json({ message: 'Adviser already exists.' });

  const hashedPassword = await bcrypt.hash(password, 10);
  adviser = await Adviser.create({ username, email, password: hashedPassword });

  const token = jwt.sign({ id: adviser.id, role: 'adviser' }, process.env.JWT_SECRET);
  res.status(201).json({ token });
};

exports.adviserLogin = async (req, res) => {
  const { email, password } = req.body;

  const adviser = await Adviser.findOne({ where: { email } });
  if (!adviser) return res.status(400).json({ message: 'Invalid email or password.' });

  const validPassword = await bcrypt.compare(password, adviser.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid email or password.' });

  const token = jwt.sign({ id: adviser.id, role: 'adviser' }, process.env.JWT_SECRET);
  res.status(200).json({ token });
};
