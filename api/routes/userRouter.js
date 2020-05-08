//ADDICIONEI router and express;
const express = require('express');

const User = require('../modules/userModules');

import { 
    addNewUser, 
    getUser, 
    signUpUser,

} from "../controller/userController";

import { Mongoose } from "mongoose";

const route = (app) => {
    app.get('/user', (req, res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
    },  getUser)
    .post('/user', addNewUser)
    .post("/signup", signUpUser); 
}
        
export default route;
