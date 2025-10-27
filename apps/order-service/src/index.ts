import "dotenv/config";
import Fastify, { FastifyInstance } from "fastify";
import pkg from "@clerk/fastify";
import { checkAuth } from "./middleware/middleware.js";
const { clerkClient, clerkPlugin, getAuth } = pkg;

const server: FastifyInstance = Fastify();

server.get("/", (req, reply) => {
  return reply.send("Order endpoint works");
});
server.register(clerkPlugin);

server.get("/test", { preHandler: checkAuth }, async (request, reply) => {
  console.log("+++++++++++++++++++++++++++++++++++++++++");
  try {
    return reply.send({
      message: "User retrieved successfully Fastify",
      hello: "hello",
      userId: request.userId,
    });
  } catch (error) {
    server.log.error(error);
    return reply.code(500).send({ error: "Failed to retrieve user" });
  }
});

const start = async () => {
  try {
    await server.listen({ port: 8001, host: "0.0.0.0" });
    console.log("Order service is running on Port 8001");
  } catch (err) {
    server.log.error(err);
    //process.exit(1);
  }
};

start();
