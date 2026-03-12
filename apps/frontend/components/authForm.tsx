"use client"
import { useMutation } from "@tanstack/react-query"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { app } from "@/lib/elysiaClient"
import { useRef } from "react"
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AuthForm({type} : {type:string}){

    const emailRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    
    const mutation = useMutation({
        mutationFn : async({email, password, name} : {email : string, password : string, name : string})=>{
            if(type == 'signup'){
                const response = await app.auth.signup.post({email,password,name})
                if(response.status == 200){
                    return response.data
                }
            }else{
                const response = await app.auth.signin.post({email, password})
                if(response.status == 200){
                    return response.data
                }
            }

            throw new Error("something went wrong here ")
        },
        onSuccess :  (data)=>{
            console.log("this is data : ",data)
            if(type == 'signin'){
                router.push('/')
            }else{
                router.push('/signin')
            }
        }
    })  
    return <form
            onSubmit={(e)=>{
                e.preventDefault()
                console.log(emailRef.current?.value)
                mutation.mutate({
                    email : emailRef.current?.value!,
                    password : passwordRef.current?.value!,
                    name : nameRef.current?.value!
                })
            }}
        > 
        <div className="flex flex-col gap-6">
            {type == 'signup' && <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input placeholder="enter you name" ref={nameRef} required/>
            </div>}
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input placeholder="enter you email" ref={emailRef} required/>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input placeholder="enter your password" type="password" ref={passwordRef} required/>
            </div>
            {mutation.isError && (
                <div className="flex items-start gap-2.5 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3.5 py-3">
                    <AlertCircle className="size-4 shrink-0 mt-0.5" />
                    <span>
                        {mutation.error?.message ||
                            "Something went wrong. Please try again."}
                    </span>
                </div>
            )}

            {mutation.isSuccess && (
                <div className="flex items-start gap-2.5 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3.5 py-3">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
                    {type == 'signup' ? 
                        <span>You'r signed up, redirecting for signin...</span> 
                        : 
                        <span>redirecting to dashboard...</span>
                    }
                </div>
            )}
        </div>
        <div className="mt-4 w-full flex flex-col gap-3">
            <Button type="submit" disabled={mutation.isPending || mutation.isSuccess} variant="default" className="w-full dark:bg-white dark:text-black cursor-pointer">
                {mutation.isPending ? (
                <>
                    <Loader2 className="size-4 animate-spin" />
                    loading...
                </>
            ) : (
                <>
                    Signup
                    <ArrowRight className="size-4" />
                </>
            )}</Button> 
        </div>
    </form>
} 