import * as bcrypt from "bcryptjs";


 export const hashGeneractor = async(password: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(password, salt);
    return result;
  }

  export const compare = async(password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
  }
