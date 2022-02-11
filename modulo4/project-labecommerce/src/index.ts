import { app } from "./app";

import { addNewUser } from "./API/addNewUser";
import { getAllUsers } from "./API/getAllUsers";
import { deleteUserById } from "./API/deleteUserById";
import { addNewProduct } from "./API/addNewProduct";
import { getAllProducts } from "./API/getAllProducts";
import { addRegisterPurchase } from "./API/addRegisterPurchase";





app.get('/users', getAllUsers)
app.post('/users', addNewUser)
app.delete('/users/:id', deleteUserById)

app.get('/products', getAllProducts)
app.post('/products', addNewProduct)

app.post('/purchases', addRegisterPurchase)