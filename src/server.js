const express = require('express');
const config = require('./config/index');
const mainApp = require('./app.js');

const startServer = async () => {
  const app = express();
  await mainApp.initalizeServer(app);
  app.listen(config.port, () => {
    console.log(
      `Server running on http://localhost:${config.port} in ${process.env.NODE_ENV} mode`
    );
  });
};

startServer();
