import "dotenv/config";
import mongoose from "mongoose";
let isConnected = false;
export const connectToMongo = async () => {
  if (isConnected) return;
  if (!process.env.MONGODB_CONNECTION_STRING) {
    const err = new Error("MONGODB CONNECTION STRING is missing");
    console.error(err);
    throw err;
  }

  try {
    console.log("coonnecting to db.............");
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "");
    isConnected = true;
    console.log("connected to mongo db!!!!!");
  } catch (error) {
    isConnected = false;
    console.error(error);
    throw error;
  }
  return;
};
