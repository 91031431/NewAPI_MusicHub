import mongoose from 'mongoose';
import { userSchema } from '../modules/userModules';

const User = mongoose.model('User', userSchema);

export const addNewUser = (req, res) => {
    let newUser = new User(req.body);

    //It was album before
    newUser.save((err, user) => {
        if (err){
            res.send(err);
        }
        res.json(user);
    });
};

export const getUser = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};
