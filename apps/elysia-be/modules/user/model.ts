import { t } from "elysia";


export namespace UserModel{
    export const signupSchema = t.Object({
        name : t.String({minLength : 3, maxLength : 40}),
        email : t.String({format : "email"}),
        password : t.String({minLength : 8, maxLength : 40})
    })
    export type SignupSchema = typeof signupSchema.static

    export const signupResposne = t.Object({
        id : t.String(),
    })
    export type SignupResposne = typeof signupResposne.static

    export const signupFailedResponse = t.Object({
        msg : t.String(),
        error : t.String()
    })
    export type SignupFailedResponse = typeof signupFailedResponse.static

    export const signinSchema = t.Object({
        email : t.String({format : "email"}),
        password : t.String()
    })
    export type SigninSchema = typeof signinSchema.static

    export const signinResponse = t.Object({
        msg : t.String()
    })
    export type SignInResponse = typeof signinResponse.static

    export const signinResponseFailed = t.Object({
        msg : t.String(),
    })
    export type SigninResponseFailed = typeof signinResponseFailed.static
}