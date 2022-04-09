'use strict';

const express = require('express');
const morgan = require('morgan');
import productRouter from './routes/productRoutes';
import categoryRouter from './routes/categoryRoutes';

const app = express();
app.use(express.json());
// morgan is used as a middleware for logging requests
app.use(morgan('dev'));

app.use('/api/v1', productRouter);
app.use('/api/v1', categoryRouter);

export default {
    server: app,
    start: (port?: number) => {
        let PORT = port || process.env.PORT || 7000;
        app.listen(PORT, ()=> {console.log(`Listening on ${PORT}`)})
    }
};
