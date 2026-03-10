import { PrismaClient } from "./generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

const prismaAdapter = new PrismaPg({
    connectionString : process.env.DATABASE_URL
}) 

export const client = new PrismaClient({
    adapter : prismaAdapter
})