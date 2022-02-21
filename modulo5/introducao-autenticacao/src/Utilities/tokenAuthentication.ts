import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../Types/type_authentication";

const expiresIn = "1min";

export const tokenAuthentication = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};