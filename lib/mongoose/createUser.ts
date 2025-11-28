import connectDB from "@/lib/mongoose/mongoose";
import User from "@/models/User";

type DbQueryResult = {
    statusCode: number,
    message: string
};

export default async function createUser(full_name: string, email: string, phone_no: string, coupon_code: string): Promise<DbQueryResult>{

    const result: DbQueryResult = {
        statusCode: 200,
        message: "Success"
    };

    try {
        await connectDB();
    }
    catch (error) {
        console.error("Connection to DB failed:\n" + error);
        result.statusCode = 500;
        result.message = "Internal Sever Error";
        return result;
    }

    try {
        await User.create({
            full_name,
            email,
            phone_no,
            coupon_code
        });
    } catch (error) {
        console.error("Failed to add User:\n" + error);
        result.statusCode = 500;
        result.message = "Internal Sever Error";
        return result;
    }

    return result;
}