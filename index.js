'use strict'
const express = require('express');

const app = express();
const static_root = "app";
const port = process.env.PORT || 80;

app.use(express.static(static_root));

app.listen(this.port, () => {
  console.log('Http server started');
});