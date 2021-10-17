const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/userRoutes');
const postRoutes = require("./routes/post.routes");

require("dotenv").config({ path: './config/.env' })
require('./config/db')
const { checkUser, requireAuth } = require('./middleware/auth.middleware');
const { post } = require("./routes/userRoutes");




const app = express();


// on definie ce qui peut envoyée des requettes à notre api
const cors = require('cors');
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

app.use(cors({ origin: corsOptions }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// jwt 

app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => { res.status(200).send(res.locals.users._id) });

// routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);



// server
app.listen(5000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})