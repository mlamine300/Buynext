import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { checkAdmin, checkAuth } from "../middleware/middleware.js";
import { OrderModel } from "@repo/order_db";
export const orderRoute = async (fastify: FastifyInstance) => {
  fastify.get(
    "/user-order",
    { preHandler: checkAuth },
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const orders = await OrderModel.find({
          userId: request.userId,
        });
        console.log(orders);
        return reply.send(orders);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );

  fastify.get(
    "/orders",
    { preHandler: [checkAuth, checkAdmin] },
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const orders = await OrderModel.find();
        return reply.send(orders);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );
};
