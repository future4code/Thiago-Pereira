import express from "express";
import {AddressInfo} from "net";
import { userRouter } from "./router/UserRouter";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});


const student1: string = "Leonardo de Andrade Oliveira"
const student2: string = "Thiago Daurizio Feitoza Pereira"
const groupCarverNumber: string[] = []

export const createGroup = (
  student1: string, 
  student2: string, 
  groupCarverNumber: string[]
    ):string[] | string => {

   if(student1 && student2){
    groupCarverNumber.push(student1, student2)
   } else{
     return "o projeto é em dupla de dois!!!"
   }
   return groupCarverNumber
}

console.log(createGroup(student1, student2, groupCarverNumber))