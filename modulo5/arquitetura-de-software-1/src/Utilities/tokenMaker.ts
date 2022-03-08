import * as jwt from "jsonwebtoken";
import { AutheticationData } from "../Types/class_user";

export class TokenMaker {

  public generate(input: AutheticationData): string {
    const token = jwt.sign(
      input,
      process.env.JWT_TOKEN as string,
      { expiresIn: process.env.EXPIRES_IN },
      )
    return token
  }

  public verify(token: string): AutheticationData {
    const data = jwt.verify(token, process.env.JWT_TOKEN)
      return data as AutheticationData
  }
} 