const APIError = require("../errors/apiError");

module.exports = (err, req, res, next) => {
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ msg: err });
};
