const { StatusCodes } = require("http-status-codes");

const notFound = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND);
  next(new Error(`Not Found ${req.originalUrl}`));
};

const errorHandler = (error, _req, res, next) => {
  const statusCode = res.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode);
  res.json({
    status: statusCode,
    result: null,
    error: process.env.NODE_ENV === "production" ? true : error.stack
  });
  next();
};

module.exports = {
  notFound,
  errorHandler
};
