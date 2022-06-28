const express = require('express');
const bodyParser = require('body-parser');
const clientRouter = require('./router/clients');
const adminRouter = require('./router/admin');
const app = express();

app.use(bodyParser.json());
app.use("/clientes", clientRouter);
app.use("/admin", adminRouter);




app.listen(3000);