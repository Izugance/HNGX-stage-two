const Person = require("../models/Person");
const asyncWrapper = require("../middleware/asyncWrapper");
const APIError = require("../errors/apiError");

const _toTitleCase = (str) => {
  let strs = str.trim().split(/\s+/);
  return strs
    .map((str) => {
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    })
    .join(" ");
};

const getAllPersons = asyncWrapper(async (req, res) => {
  let persons = await Person.find({});
  res.status(200).json({ persons });
});

const createPerson = asyncWrapper(async (req, res) => {
  // Store names in title case.
  let name = req.body.name;
  let person = await Person.create({ name: _toTitleCase(name) });
  res.status(201).json({ person });
});

const getPerson = asyncWrapper(async (req, res, next) => {
  let name = req.params.user_id.replace(/-+/g, " ");
  let person = await Person.findOne({ name: _toTitleCase(name) });

  if (!person) {
    return next(new APIError(`Person with name '${name}' does not exist`, 404));
  }

  res.status(200).json({ person });
});

const updatePerson = asyncWrapper(async (req, res, next) => {
  let name = req.params.user_id.replace(/-+/g, " ");
  // Ensure the update keeps the name in title case.
  req.body.name = _toTitleCase(req.body.name);
  let person = await Person.findOneAndUpdate(
    { name: _toTitleCase(name) },
    req.body,
    {
      new: true,
      runValidators: true,
      // overwrite: true,
    }
  );

  if (!person) {
    return next(new APIError(`Person with name '${name}' does not exist`, 404));
  }

  res.status(200).json({ person });
});

const deletePerson = asyncWrapper(async (req, res, next) => {
  let name = req.params.user_id.replace(/-+/g, " ");
  let person = await Person.findOneAndDelete({ name: _toTitleCase(name) });

  if (!person) {
    return next(new APIError(`Person with name '${name}' does not exist`, 404));
  }

  res.status(200).json({ person });
});

module.exports = {
  getAllPersons,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
