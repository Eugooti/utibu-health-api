const express=require('express')
const {tablesSync}=require('./models/modelsSych')
const {notFound}=require('./handlers/errorHandlers')
const authRoutes=require('./routes/auth.router')
const appRoutes=require('./routes/app.router')
const cors = require('cors');
const morgan = require('morgan');
const passport=require('./config/AuthConfig/passportConfig')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const crypto=require('crypto')
const bodyParser=require('body-parser')

const app=express()

tablesSync().then((connection)=>{
    if(connection){

        const generateSecretKey = () => {
            return crypto.randomBytes(32).toString('hex');
        };

        app.use(bodyParser.json());
        app.use(cookieParser());
        app.use(session({
            secret: generateSecretKey(),
            resave: false,
            saveUninitialized: false
        }));

        app.use(cors());
        app.use(morgan('dev'));
        app.use(passport.initialize(undefined));

        app.use('/uhs',authRoutes)
        app.use('/uhs',appRoutes)
        app.use(notFound)


        app.listen(5000,()=>{
            console.log("Server running on http://localhost:5000/");
        })
    }else {
        console.log("Unable to connect to the database");
    }
})


