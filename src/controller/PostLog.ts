import {RequestHandler} from "express"
import {getConnection} from "typeorm"
import {Log} from "../db"

export const postLog: PostLogRequestHandler = async (req, res) => {
    const {body = {}} = req;
    const connection = await getConnection()
    const log = new Log();
    Object.assign(log, body)
    await connection.manager.save(log);
    res.send("SUCESSFULLY ADD LOG")
}

type PostLogBody = {
    [T in Exclude<keyof Log, "id" | "createdAt">]: Log[T]
}

type PostLogRequestHandler = RequestHandler<any, string, PostLogBody, PostLogQuery>

type PostLogQuery = {
    apiKey: string
}