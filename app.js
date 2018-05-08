
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();

const criptRouter = require('./api/routes/cripto.route');

app
  .use(helmet())
  .use(bodyParser.urlencoded({ extended: true}))
  .use(bodyParser.json())
  .use(criptRouter)
  .listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
  });