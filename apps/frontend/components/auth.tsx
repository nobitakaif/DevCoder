import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Github, GithubIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import AuthForm from "./authForm";


export default function AuthPage({type} : {type: string}){

    return <div className="h-screen w-full flex justify-center items-center">
        <Card className={type == 'signup' ? `h-auto w-92` : 'h-auto w-92'}>
            <div className="fixed flex justify-end w-90 ">
                <ModeToggle />
            </div>
            <CardHeader className="">
                <CardTitle className="text-center text-2xl font-bold">{type == "signup" ? "Signup" : "Signin"}</CardTitle>
                <CardDescription className="text-center text-lg">Please login to use our service</CardDescription>
            </CardHeader>
            <div className="flex gap-4 w-full justify-center items-center">
                <FcGoogle size={28} cursor={"pointer"} />
                <FaGithub size={28} className="cursor-pointer" />
            </div>
            
            <CardContent>

                <AuthForm type={type} />
            </CardContent>
            {type == "signup" ? <Link href={"/signin"} className="pl-4 w-45 underline-offset-3">Already have an <span className="">account</span> </Link> 

            : <Link href={"/signup"} className="pl-4 w-45 underline-offset-3">don't have an account</Link>}
            
            
        </Card>
        
    </div>
}