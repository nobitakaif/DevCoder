import express from "express"
import cors from "cors"
import { SigninSchema, SignupSchema } from "@repo/common"
const app = express()

app.use(cors())

app.post("/auth/signup", async(req,res)=>{
    const {}  = SignupSchema.safeParse(req.body)
})