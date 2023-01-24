// const express = require('express');
// const bodyParser = require('body-parser');
// const {sequelize} = require('./model')
// const {getProfile} = require('./middleware/getProfile')
// const app = express();
// app.use(bodyParser.json());
// app.set('sequelize', sequelize)
// app.set('models', sequelize.models)

// /**
//  * FIX ME!
//  * @returns contract by id
//  */
// app.get('/contracts/:id',getProfile ,async (req, res) =>{
//     const {Contract} = req.app.get('models')
//     const {id} = req.params
//     const contract = await Contract.findOne({where: {id}})
//     if(!contract) return res.status(404).end()
//     res.json(contract)
// })
// module.exports = app;

import express from 'express';

import { validationError, internalServerError } from './middleware/error';

import routes from './routes';

const app = express();



app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
// Registering routes
app.use(routes);

// Handling express-validation errors
app.use(validationError);

// Handling express-validation errors
app.use(internalServerError);

export default app;

