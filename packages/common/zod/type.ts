import { z } from "zod"

export const SignupSchema = z.object({
    name : z.string().min(3,{message : "name is too short"}).max(14, {message : "name is too loong"}),
    email : z.email(),
    password : z.string().min(3,{message : "password is too short"}).max(14, {message : "password is too loong"})
})

export const SigninSchema = z.object({
    email : z.email(),
    password : z.string().min(3,{message : "password is too short"}).max(14, {message : "password is too loong"})
})