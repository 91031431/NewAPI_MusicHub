// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const albumRoutes = require('./api/routes/albums');
// const artistRoutes = require('./api/routes/artists');
// const userRoutes = require('./api/routes/user');

// app.use(morgan('dev'));
// app.use('/uploads', express.static('uploads'));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// const MONGODB_URI = 'mongodb+srv://demi:159632Dami@cluster0-neife.mongodb.net/test?retryWrites=true&w=majority';

// //connecting with Database
// mongoose.connect(MONGODB_URI || 'mongodb://localhost/mern_youtube',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// );

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//         return res.status(200).json({});
//     }
//     next();
// });

// app.use('/albums', albumRoutes);
// app.use('/artists', artistRoutes);
// app.use('/user', userRoutes);

// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });

// module.exports = app;