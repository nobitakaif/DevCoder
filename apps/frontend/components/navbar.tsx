import Link from "next/link"

export function Navbar(){

    return <div className="h-14 w-28/29 rounded-full fixed m-6 bg-white/80 shadow-lg shadow-black/30 flex  justify-around items-center">
        <div className="text-2xl font-bold bg-amber-300 rounded-lg lg:px-4 lg:py-1 cursor-pointer">problem </div>
        <Link href={"/day-problem"} className="text-2xl font-bold bg-amber-300 rounded-lg lg:px-4 lg:py-1 cursor-pointer">problem of the day </Link>
        <div className="text-2xl font-bold bg-amber-300 rounded-lg lg:px-4 lg:py-1 cursor-pointer">profile</div>
    </div>
}