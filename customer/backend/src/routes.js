const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const ShopController = require('./controllers/ShopController');
const ProductController = require('./controllers/ProductController');

routes.post( '/user' , UserController.create )
routes.get( '/user' , UserController.listAll )
routes.get( '/userById/:id' , UserController.findById )

routes.post( '/shop' , ShopController.create )
routes.get( '/shop' , ShopController.listAll )
routes.get( '/shopSortZipCode/:zipCode' , ShopController.listAllZipCodeSorting )
routes.get( '/shopSortCoordinates/:longitude/:latitude' , ShopController.listAllCoodinatesSorting )
routes.get( '/shopById/:id' , ShopController.findById )

routes.post( '/product' , ProductController.create )
routes.get( '/product' , ProductController.listAll )
routes.get( '/productContains/:contains' , ProductController.findByProductContains )
routes.get( '/productById/:id' , ProductController.findById )

module.exports = routes;