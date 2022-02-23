import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

export default function tokenMaker (input: any): string {
  const token = jwt.sign(
    {
      id: input.id
    },
    process.env.JWT_TOKEN as string,
    {
      expiresIn
    }
  );
  return token;
} 