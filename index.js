import express from 'express';
import {finalController} from './controller/finalController.js'
import { secure } from './middleware/secure.js'
const app = express();
const port = process.env.PORT || 2000;

app.use('/', secure, finalController)

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))