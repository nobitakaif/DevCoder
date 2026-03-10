import { Elysia } from "elysia";
import { user } from "../modules/user";

const app = new Elysia()
  .use(user)
  .listen(8002);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
