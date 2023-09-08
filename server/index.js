import express from 'express';
import Connection from './database/db.js'; 
import dotenv from 'dotenv';
import Router  from './routes/route.js';

dotenv.config();

const app = express();  
app.use('/', Router );

app.listen(PORT, () => console.log(`Server is running successfully on PORT: ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);