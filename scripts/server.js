const Bundler = require('parcel-bundler');
const express = require('express');
const app = express();

const file = 'src/config/index.html'; // Pass an absolute path to the entrypoint here
const options = {
  watch: true
}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(express.static('public'))
app.use(bundler.middleware());

// Listen on port 8080
app.listen(8080);
