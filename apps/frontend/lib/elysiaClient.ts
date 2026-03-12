import { treaty } from "@elysiajs/eden";
import { App } from "@repo/be";


export const app = treaty<App>('localhost:8001')