import * as jwt from "jsonwebtoken";


const expiresIn = "1min";

export default function tokenGeneractor (token: string): any {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
}; 