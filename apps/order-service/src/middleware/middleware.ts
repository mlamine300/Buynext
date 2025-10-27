import "dotenv/config";
import { FastifyReply, FastifyRequest } from "fastify";
import pkg from "@clerk/fastify";
const { getAuth } = pkg;

declare module "fastify" {
  interface FastifyRequest {
    userId?: string;
  }
}
export const checkAuth = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  // Use `getAuth()` to access `isAuthenticated` and the user's ID
  const { isAuthenticated, userId } = getAuth(request);

  // If user isn't authenticated, return a 401 error
  if (!isAuthenticated) {
    return reply.code(401).send({ error: "User not authenticated Fastify" });
  }

  request.userId = userId;
};
