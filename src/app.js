const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const { sequelize } = require("./models");
const routes = require("./api/index");

const { notFound, errorHandler } = require("./middleware");

const initalizeServer = async (app) => {
  // connect to DB
  await sequelize.authenticate();

  await sequelize.sync({ force: true });

  // If we are behind some reverse proxy like Nginx then we can trust this
  app.enable("trust proxy");

  app.use(compression());
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use("/api/", routes);
  app.use(notFound);
  app.use(errorHandler);
};

module.exports = { initalizeServer };
