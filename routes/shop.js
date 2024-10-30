const path = require('path');

const express = require('express');

const getProductControllers = require("../controllers/product");


const router = express.Router();

router.get('/', getProductControllers.getProducts);

module.exports = router;
