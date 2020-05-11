
//Index funcionando

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://demi:159632Dami@cluster0-neife.mongodb.net/test?retryWrites=true&w=majority';

import express from 'express';
import albumRouter from './api/routes/albumRouter';
import artistRouter from './api/routes/artistRouter';
import userRouter from './api/routes/userRouter';
import bodyParser from 'body-parser';

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
