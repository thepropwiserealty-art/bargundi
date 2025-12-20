import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {

  if (cached.conn) {
    return cached.conn;
  }

  
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "leads",
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ New MongoDB Connection established");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // Reset promise if connection failed
    throw e;
  }

  return cached.conn;
}

export default connectDB;