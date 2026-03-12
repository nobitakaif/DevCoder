import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Signup(){
    return <div className="h-screen w-full flex justify-center items-center">
        <Card className="h-112 w-92 ">
            <CardHeader className="">
                <CardTitle className="text-center text-2xl font-bold">Signup</CardTitle>
                <CardDescription className="text-center text-lg">Please login to use our service</CardDescription>
            </CardHeader>
        </Card>
        
    </div>
}