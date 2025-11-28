import mongoose from "mongoose";
import { websiteName } from "@/lib/constans";

const UserSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      maxlength: 150,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 255,
      lowercase: true,
      trim: true,
    },

    phone_no: {
      type: String,
      required: true,
      unique: true,
      maxlength: 20,
      trim: true,
    },
     coupon_code: {
      type: String,
      required: true,
      unique: true,
      maxlength: 20,
      trim: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at"
    },
  }
);

export const ModelName: string = websiteName ? websiteName : "User";

export default mongoose.models[ModelName] || mongoose.model(ModelName, UserSchema);
