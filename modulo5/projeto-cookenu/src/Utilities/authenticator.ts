import * as jwt from "jsonwebtoken";


const expiresIn = "1min";

export const tokenAuthentication = (token: string): any => {
  const payload = jwt.verify(token, process.env.JWT_TOKEN as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
}; 