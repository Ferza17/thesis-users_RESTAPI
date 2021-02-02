'use strict'
import express from "express"
import dotenv from "dotenv"
import http from "http"
import {json} from "body-parser"
import UserRoutes from "../Routes/user_route/user_routes";
import ResponseUtils from "../utils/response/response"
import mongoose from "mongoose";


const StartApplication = () => {

    const app = express()
    // Express Configuration
    app.use(json())
    // Register Routes
    app.use("/api/v1/user", UserRoutes)
    // Error Routes
    app.use((req, res, next) => {
        ResponseUtils.ErrorNotFoundResponse(res, "Not Found")
    })

    // Server Configuration
    dotenv.config()
    mongoose
        .connect(process.env.MONGODB_URL, {keepAlive: true})
        .then((res) => {
            console.log("Database Connected!")
            http.createServer(app).listen(process.env.PORT)
            console.log("Server Created")
        })
        .catch(err => {
            console.log("Database Error " + err)
        })

}

export default StartApplication