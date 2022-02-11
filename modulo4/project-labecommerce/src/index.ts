import { app } from "./app";

import { addNewUser } from "./API/User/addNewUser";
import { getAllUsers } from "./API/User/getAllUsers";
import { deleteUserById } from "./API/User/deleteUserById";
import { addNewProduct } from "./API/Product/addNewProduct";
import { getAllProducts } from "./API/Product/getAllProducts";
import { addRegisterPurchase } from "./API/Purchases/addRegisterPurchase";
import { getUserPurchasesById } from "./API/User/getUserPurchasesById";
import { deleteProductById } from "./API/Product/deleteProductById";
import { changeProductPriceWithId } from "./API/Product/changeProductPriceWithId";
import { getAllPurchases } from "./API/Purchases/getAllPurchases";
import { deletePurchaseById } from "./API/Purchases/deletePurchadeById";


app.get('/users', getAllUsers)
app.get('/users/:user_id/purchases', getUserPurchasesById)
app.post('/users', addNewUser)
app.delete('/users/:id', deleteUserById)

app.get('/products', getAllProducts)
app.post('/products', addNewProduct)
app.put('/products/editprice/:product_id', changeProductPriceWithId)
app.delete('/products/:id', deleteProductById)

app.get('/purchases', getAllPurchases)
app.post('/purchases', addRegisterPurchase)
app.delete('/purchages/:purchase_id', deletePurchaseById)