import Elysia, { status } from "elysia";
import { UserModel } from "./model";
import { UserService } from "./service";
import { prisma } from "@repo/db";
import jwt from "@elysiajs/jwt";


export const user = new Elysia({prefix : "/auth"})
    .post("/signup", async ({body})=>{
        const { email, password, name } = body
        const resposne = await UserService.signup({email, password, name})
        
        
        if("id" in resposne){
            return status(200, {
                id : resposne.id
            })
        }
        
        return status(411, {
            msg : resposne.msg,
            error : resposne.error
        })
        
    
    }, {
        body : UserModel.signupSchema,
        response : {
            200 : UserModel.signupResposne,
            411 : UserModel.signupFailedResponse
        }
    })
    .use(
        jwt({
            name : "jwt",
            secret : process.env.JWT_SECRET!
        })
    )
    .post("/signin", async ({body, jwt, cookie : {auth}}) =>{
        const { email, password } = body
        const isUser = await UserService.signin({email, password})
        
        if(!isUser.status){
            return status(411,{
                msg : isUser.msg
            })
        }

        const token = await jwt.sign({sub : isUser.id})
        
        auth.set({
            value : token,
            maxAge : 7 * 86400, // only for 7 day
            httpOnly : true
        })
        
        return status(200, {
            msg : isUser.msg
        })
    }, {
        body : UserModel.signinSchema,
        response : {
            200 : UserModel.signinResponse,
            411 : UserModel.signinResponseFailed    
        }
    })
    .resolve(async ({cookie : {auth}, status,jwt})=>{
        if(!auth){
            console.log("auth is not present")
            return status(401)
        }
        const decoded = await jwt.verify(auth.value as string)
        if(!decoded || decoded.id){    
            console.log("token inocorrect")
            return status(401)
        }
        return {
            userId : decoded.sub as string
        }
    })
    .get("/me", async({userId, status})=>{
        console.log(userId)
        const userData = await UserService.getProfile(userId!)

        return userData
    })