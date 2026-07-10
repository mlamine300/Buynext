import { connectToMongo } from "./connection.ts";
import { OrderModel } from "./order-model.ts";

export {
  OrderModel,
  type OrderSchemaType,
  OrderStatus,
} from "./order-model.ts";
export { connectToMongo } from "./connection.ts";
await connectToMongo();
// await OrderModel.create({
//   userId: "user_34cbLN5pEGNPuBIfKP1L9qfFELT",
//   email: "laoufi@gmail.com",
//   amount: 50,
//   products: [{ name: "x", quantity: 1, price: 50 }],
//   status: "success",
// });
const x = await OrderModel.find();
console.log(x);
