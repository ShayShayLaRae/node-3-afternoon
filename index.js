require('dotenv').config();
const massive = require('massive');
const express = require('express');
const product_controller = require('./product_controller');


const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
})
.catch(err => console.log(err));

app.use(express.json());

app.post('/api/products', product_controller.addProduct);
app.get('/api/products', product_controller.getAll);
app.get('/api/products/:id', product_controller.getOne);
app.put('/api/products/:id', product_controller.updateProduct);
app.delete('/api/products/:id', product_controller.deleteProduct);

app.listen(SERVER_PORT, () => {
    console.log(`It works, for now ${SERVER_PORT}.`);
    
});