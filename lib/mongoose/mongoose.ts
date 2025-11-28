// lib/mongoose.js
import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "leads",
  });

  isConnected = db.connections[0].readyState === 1;

  console.log("MongoDB Connected");
};

export default connectDB;