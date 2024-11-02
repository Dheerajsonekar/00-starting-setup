const path = require('path');

const express = require('express');

const addProductControllers = require("../controllers/products");

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', addProductControllers.addProduct);

// /admin/add-product => POST
router.post('/add-product',addProductControllers.postProduct);

exports.routes = router;

