import { connectDB } from './config/db.js';
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
connectDB();

const app = express();

//Middleware
app.set('views', '../Frontend/views')
app.set('view engine', 'ejs');
app.use(express.static('../Frontend/views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/');

//Adding in initial get request for app homepage in my server.js file
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8080, () => console.log('Your app is listening on port 8080 : http://localhost:8080'))
