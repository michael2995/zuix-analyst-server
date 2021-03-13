import {Router} from "express"
import {getLog, getLogs, postLog} from "../controller"

const router = Router()

router.get("/", (req, res) => {
    res.send("I AM LISTENING")
})

router.post("/log", postLog)
router.get("/log", getLog)
router.get("/logs", getLogs)

export default router