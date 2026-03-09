import Elysia from "elysia";
import { UserModel } from "./model";


export const user = new Elysia({prefix : "/auth"})
    .post("/signup", async({body})=>{
        const { email, password, name } = body
        
    }, {
        body : UserModel.signupSchema
    })