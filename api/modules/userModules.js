import mongoose from 'mongoose';

//Schema User
const Schema = mongoose.Schema;
export const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Email: { type: String, required: true },
    Password: { type: String, required: true },
});

// //Model Artist
// const User = mongoose.model('user', userSchema);

// //Saving data to database for Artist
// const dataLast = {
//     //_id: '5eade3b207d0f98b47c61e91',
//     Email: 'emailtest@test.com',
//     Password: 'MadameX',
// };

// const newUser = new User(dataLast);

// newUser.save((error) => {
//     if (error) {
//         console.log('ops error');
//     } else {
//         console.log('data has been saved for user');
//     }
// });






//DAVID CODE
// const mongoose = require('mongoose');
// //mongoose.set('useCreateIndex', true);

// const userSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     email: { type: String, required: true},
//         //unique: true, 
//         //match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

//     password: { type: String, required: true }
// });

// module.exports = mongoose.model('User', userSchema);