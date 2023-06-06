import express from 'express';
import cors from 'cors';
import { getDataSendController } from './controllers/getControllers';

require('dotenv').config();
const app = express();

// Settings
app.set('port', process.env.PORT ?? 4000);

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors(
    {
        allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
    }
));

// Routes
app.use(getDataSendController);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
