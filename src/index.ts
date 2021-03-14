import "reflect-metadata"
import express from "express"
import dotenv from "dotenv"
import path from "path"
import {Connection, createConnection} from "typeorm"
dotenv.config({path: path.resolve(__dirname, "../.env")})

import router from "./router"
import config from "../ormconfig.js"

const setupServer = async(connection: Connection) => {
    const app = express()
    const port = 9999
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json({ limit: "50mb" }))

    app.use("/", router)

    app.listen(port, () => {
        console.log(`started listening on ${port}`)
    })
}

createConnection({
    ...config,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
}).then(setupServer)
    .catch(error => console.log(error));
