import {RequestHandler} from "express"
import {getConnection, Between} from "typeorm"
import {Log} from "../db"
import moment from "moment"

const CREATED_AT = "2021-03-14-00:04:44"

export const getLogs: GetLogsRequestHandler = async(req, res) => {
    const {query} = req;
    const now = moment(Date.now()).format("YYYY-MM-DD-hh:mm:ss")
    const {from = CREATED_AT, to = now} = query;
    const connection = await getConnection()

    const logs = await connection.manager.find(Log, {
        where: {
            createdAt: Between(from, to)
        }
    });

    res.json(logs)
}

type GetLogsRequestHandler = RequestHandler<any, any, any, GetLogQuery>

type GetLogQuery = {
    from: string
    to: string
}