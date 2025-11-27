import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

export const redis = new Redis(process.env.REDIS_URL);
// Test SET
await redis.set("fool1", "bars");
