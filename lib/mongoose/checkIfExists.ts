import connectDB from "@/lib/mongoose/mongoose";
import User from "@/models/User";

type DbQueryResult = {
    statusCode: number,
    message: string
};

export default async function checkIfExists(email: string, phone_no: string): Promise<DbQueryResult> {
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



    let existing;

    try {
        existing = await User.findOne({
            $or: [{ email }, { phone_no }],
        });
    } catch (error) {
        console.error("Connection to DB failed:\n" + error);
        result.statusCode = 500;
        result.message = "Internal Sever Error";
        return result;
    }

    if (existing) {
        if (existing.email === email) {
            result.message = "Email already exists";
        }

        if (existing.phone_no === phone_no) {
            result.message = result.message
                ? "Email and phone number already exist"
                : "Phone number already exists";
        }

        result.statusCode = 400;
        return result;
    }

    return result;
}