const express = require('express');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const next = require('next');
const mongoose = require("mongoose")
const AppError = require("./API/Utils/appError");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean");
const hpp = require("hpp");
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)
const NFT = require("./API/models/nftModel")


const globalErrorHandler = require("./API/controllers/errorController")
var morgan = require('morgan')
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

process.on("uncaughtException", err => {
    console.log("uncaughtException Shutting down application", err)
    process.exit(1);
})



const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP, please try again in an hour"
});


app.prepare().then(() => {
    const server = express();
    const nftsRouter = require("./API/routes/nftsRoute")
    const usersRouter = require("./API/routes/usersRoute")
    server.use(express.json());
    server.use(mongoSanitize())
    server.use(xss());
    server.use(hpp({
        whitelist: ["duration", "difficulty", "maxGroupSize", "price", "ratingsAverage", "ratingsQuantity"]
    }));
    // server.use(helmet())
    server.use("/api", limiter);
    console.log("node server running")
    server.use(morgan("dev"))
    server.use(express.static(`${__dirname}/nft-data/img`));

    // CUSTOM MIDDLEWARE
    // server.use((req, res, next) => {
    //     console.log("hey i am from middleware function ")
    //     next()
    // })

    server.use((req, res, next) => {
        req.requestTime = new Date().toString();
        // console.log(req.headers)
        next()
    })

    server.use("/api/v1/nfts", nftsRouter);
    server.use("/api/v1/users", usersRouter);


    server.get('/hgjh', (req, res) => {
        res.json({ message: 'Hello from the server!' });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    //ERROR SECTION

    server.all("*", (req, res, next) => {
        next(new AppError(`can't find ${req.originalUrl} on this server`, 404))
    })

    //GLOBAL ERROR Handiling
    // server.use(globalErrorHandler)

    mongoose.connect(DB, {
        // createIndexes:true,
        // useFindAndModify:false,
        // useNewUrlParser: true 
    }).then((con) => {
        console.log("DB Connection Successfully ")
    })

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});