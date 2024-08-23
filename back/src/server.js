const express = require('express');
const server = express()
const router = require("./Routes")

server.use(router)

module.exports = server