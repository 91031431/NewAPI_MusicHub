//ADDICIONEI router and express;
const express = require('express');

const User = require('../modules/userModules');
const bcrypt = require('bcrypt');

import { 
    addNewUser, 
    getUser, 
} from "../controller/userController";
// import { Router } from "express";
import { Mongoose } from "mongoose";

const route = (app) => {
    let xz = app.route('/user');
    xz.get((req, res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
    },  getUser)
    
    //POST endpoint
    .post(addNewUser);

    app.route("/signup").post( (req, res, next) => {
        bcyprit.hash(req.body.Password, 10, (err, hash)=>{
            if (err){
                return req.status(500).json({
                    error:err
                });
            } else{
                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    Email: req.body.Email, 
                    Password: hash
                });
                user
                .save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'User created'
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
            }
        })
        
    });
}

export default route;
