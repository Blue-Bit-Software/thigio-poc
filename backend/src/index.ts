import express from 'express';
import cors from 'cors';
import { dataSendController } from './controllers/getControllers';

require('dotenv').config();
const app = express();

// Settings
app.set('port', 4000);

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors(
    {
        allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
    }
));

// Routes
app.use(dataSendController);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
