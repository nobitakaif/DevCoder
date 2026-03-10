import { prisma } from "@repo/db"
import { UserModel } from "./model";

export abstract class UserService {
    static async signup({name, email, password }: UserModel.SignupSchema) : Promise<UserModel.SignupResposne | UserModel.SignupFailedResponse> {
        try{
            const res = await prisma.user.create({
                data :{
                    email ,
                    name ,
                    password : await Bun.password.hash(password, {algorithm : "bcrypt"})
                }
            })
            return {
                id : res.id,
            }
        }catch(e:any){
            return {
                msg : "email is already taken", 
                error : e.message
            }
        }   
    }

    static async signin({email, password} : UserModel.SigninSchema) {
        const isUser = await prisma.user.findFirst({
            where : {
                email
            }
        })
        if(!isUser){
            return {
                msg : "email is incorrect",
                status : false
            }
        }
        
        const checkPassword = await Bun.password.verify(password, isUser.password)
        
        if(!checkPassword){
            return {
                msg : "incorrect password",
                status : false,
            }
        }

        return {
            status : true,
            msg : "cookie is set",
            id : isUser.id
        }
    }

    static async getProfile(userId:string){
        const user = prisma.user.findFirst({
            where : {
                id : userId
            }
        })

        return user
    }
}