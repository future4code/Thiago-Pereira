import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../Types/type_authentication";

const expiresIn = "1min"

export default function generateToken (input: AuthenticationData): string {
  const token = jwt.sign(
    {
      id: input.id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}