import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Github, GithubIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import AuthPage from "@/components/auth";

export default function Signup(){
    return <AuthPage type="signup"/>
}