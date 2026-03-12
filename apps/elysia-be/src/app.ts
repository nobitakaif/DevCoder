import { Elysia } from "elysia";
import { user } from "../modules/user";
import { cors } from "@elysiajs/cors"

export const app = new Elysia().use(cors())
    .use(user)


export type App = typeof app

