// pages/api/verify-recaptcha.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const { token } = req.body;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );
  const data = await response.json();

  if (data.success) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
}
