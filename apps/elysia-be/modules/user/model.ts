import { t } from "elysia";


export namespace UserModel{
    export const signupSchema = t.Object({
        name : t.String({minLength : 3, maxLength : 40}),
        email : t.String({format : "email"}),
        password : t.String({minLength : 8, maxLength : 40})
    })
    export type SignupSchema = typeof signupSchema.static
}