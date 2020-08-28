import { env } from "./deps.ts";

const { PORT } = env({ safe: true });

export const port: number = parseInt(PORT);
