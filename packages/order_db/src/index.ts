import { connectToMongo } from "./connection.js";
import { OrderModel } from "./order-model.js";

export {
  OrderModel,
  type OrderSchemaType,
  OrderStatus,
} from "./order-model.js";
export { connectToMongo } from "./connection.js";
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
