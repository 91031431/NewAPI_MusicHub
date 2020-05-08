import mongoose from 'mongoose';
import { userSchema } from '../modules/userModules';

const User = mongoose.model('User', userSchema);
const bcrypt = require('bcrypt');

export const addNewUser = (req, res) => {
    let newUser = new User(req.body);
    newUser._id = new mongoose.Types.ObjectId();
    //It was album before
    newUser.save((err, user) => {
        if (err){
            res.send(err);
            return;
        }
        res.json(user);
    });
};

export const getUser = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(user);
    });
};


export const signUpUser = (req, res, next) => {
    bcrypt.hash(req.body.Password, 10, (err, hash)=>{
        if (err){
            return req.status(500).json({
                error:err
            });
        }
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            Email: req.body.Email, 
            Password: hash
        });
        
        user.save((err, user) => {
            if (err){
                res.status(500).json({
                    error: err
                });
                return;
            }
            res.status(201).json({
                message: 'User created', 
                user
            });
        });


        // .then(result => {
        //     console.log(result);
        //     res.status(201).json({
        //         message: 'User created'
        //     });
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json({
        //         error: err
        //     });
        // });
    })
};
