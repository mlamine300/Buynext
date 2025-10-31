import "dotenv/config";
import { FastifyReply, FastifyRequest } from "fastify";
import pkg from "@clerk/fastify";
import type { CustomJwtSessionClaims } from "@repo/types";
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
  console.log(userId);
  if (!isAuthenticated) {
    return reply.code(401).send({ error: "User not authenticated " });
  }

  request.userId = userId;
};
export const checkAdmin = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const auth = getAuth(request);
  if (!auth.userId) {
    return reply.code(401).send({ error: "User not authenticated " });
  }
  const claims = auth.sessionClaims as CustomJwtSessionClaims;
  if (claims.metadata?.role !== "admin") {
    return reply.code(403).send({ error: "User not unauthorized! " });
  }
};
