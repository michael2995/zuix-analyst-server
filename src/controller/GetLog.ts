import {Request, Response, RequestHandler} from "express"
import {getConnection, Between} from "typeorm"
import {Log} from "../db"

export const getLog: GetLogRequestHandler = async(req, res) => {
    const connection = await getConnection()

    const log = await connection.manager.findOne(Log, {
        order: {
            id: "DESC",
        }
    });

    res.json(log)
}

type GetLogRequestHandler = RequestHandler<any, any, any, {}>
