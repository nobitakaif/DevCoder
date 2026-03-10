import express from "express"
import cors from "cors"
import { SigninSchema, SignupSchema } from "@repo/common"
const app = express()

app.use(cors())

app.post("/auth/signup", async(req,res)=>{
    const {success, data, error}  = SignupSchema.safeParse(req.body)
    if(!success){
        res.status(411).json({
            msg : "failed input validation", 
            error : error
        })
        return
    }
    try{
        
    }
    catch(e){
        res.status(403).json({
            msg : "something went wrong"
        })
    }
})