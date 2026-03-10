import { client, client } from "@repo/db";
import { UserModel } from "./model";


export abstract class UserService {
    static async signin() : Promise<UserModel.SignupSchema | string>{
        const res = client.user.create({
            data :{
                email : "",
                name : "",
                password : ""
            }
        })
        return ""
    }
}