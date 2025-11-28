import { AnyObjectSchema } from "yup";

export async function validate(schema: AnyObjectSchema, data: any) {
  try {
    return await schema.validate(data, {
      stripUnknown: true,
    });
  } catch (err: any) {
    throw new Error(err.message);
  }
}
