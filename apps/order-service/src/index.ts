import "dotenv/config";
import Fastify, { FastifyInstance } from "fastify";
import pkg from "@clerk/fastify";
import { checkAuth } from "./middleware/middleware.js";
import { orderRoute } from "./routes/order.js";
import { connectToMongo } from "@repo/order_db";
const { clerkClient, clerkPlugin, getAuth } = pkg;

const server: FastifyInstance = Fastify();

server.get("/", (req, reply) => {
  return reply.send("Order endpoint works");
});
server.get("/test", { preHandler: checkAuth }, async (req, reply) => {
  console.log("helo ", req.userId);
  reply.send({ userId: req.userId });
});
server.register(clerkPlugin);
server.register(orderRoute);

const start = async () => {
  try {
    console.log("starting");
    await connectToMongo();
    await server.listen({ port: 8001, host: "0.0.0.0" });
    console.log("Order service is running on Port 8001");
  } catch (err) {
    server.log.error(err);
    //process.exit(1);
  }
};

start();
