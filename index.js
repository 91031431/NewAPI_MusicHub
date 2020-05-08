
//Index funcionando

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://demi:159632Dami@cluster0-neife.mongodb.net/test?retryWrites=true&w=majority';


import express from 'express';
import albumRouter from './api/routes/albumRouter';
import artistRouter from './api/routes/artistRouter';
import userRouter from './api/routes/userRouter';
import bodyParser from 'body-parser';

// const albumRouter = require('./api/routes/albumRouter');
// const artistRouter = require('./api/routes/artistsRouter');

const app = express();
const PORT = 3000;

//Server listen API connection
app.listen(PORT, () =>
    console.log(`sever port ${PORT}`)
);

//connecting with Database
mongoose.connect(MONGODB_URI || 'mongodb://localhost/mern_youtube',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//bodyparser setup
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

albumRouter(app);
artistRouter(app);
userRouter(app);


//codigo DAVID

// //import express from 'express';
// const express = require('express');
// //const app = express();
// const morgan = require('morgan');

// //const bodyParser = require('body-parser');
// const bodyParser = ('body-parser');
// const mongoose = require('mongoose');

// const MONGODB_URI = 'mongodb+srv://demi:159632Dami@cluster0-neife.mongodb.net/test?retryWrites=true&w=majority';

// import routes from './api/routes/albumRouter';
// import router from './api/routes/artistRouter';
// import routers from './api/routes/userRouter';
// //import bodyParser from 'body-parser';

// // const albumRouter = require('./api/routes/albumRouter');
// // const artistRouter = require('./api/routes/artistsRouter');

// const app = express();
// const PORT = 3000;

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




// //route
// app.get('/', (req, res) =>
//     //res.send(`a get request with / route on ${PORT}`)
//     // get data fisrt
//     res.json(data)
// );

// app.post('/newItem', (req, res) =>
//     res.send(`a post request with /newItem route on ${PORT}`)
// );

// app.put('/item', (req, res) =>
//     res.send(`a put request with /item route on ${PORT}`)
// );

// app.delete('/item', (req, res) =>
//     res.send(`a delete request with /item route on ${PORT}`)
// );

// app.listen(PORT, () =>
//     console.log(`sever port ${PORT}`)
// );

// //connecting with Database
// mongoose.connect(MONGODB_URI || 'mongodb://localhost/mern_youtube',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// );

// //bodyparser setup
// app.use(bodyParser.urlencoded({ extend: true }));
// app.use(bodyParser.json());

// app.use('/albums', albumRoutes);
// app.use('/artists', artistRoutes);
// app.use('/user', userRoutes);

// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// });


// mongoose.connection.on('connected', () => {
//     console.log('Mongoose is connected');
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });



// routes(app);
// router(app);
// routers(app);


// module.exports = app;