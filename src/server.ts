'use strict';

import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import * as swaggerFile from '../swagger_output.json';
import productRouter from './routes/productRoutes';
import categoryRouter from './routes/categoryRoutes';
import graphqlCategoryRoutes from './routes-graphql/graphqlCategoryRoutes';
import graphqlProductRoutes from './routes-graphql/graphqlProductRoutes';

const app = express();
app.use(express.json());

// morgan is used as a middleware for logging requests
app.use(morgan('dev'));

// register routes
app.use('/api/v1', productRouter);
app.use('/api/v1', categoryRouter);
app.use('/graphql/v1', graphqlCategoryRoutes);
app.use('/graphql/v1', graphqlProductRoutes);

// add swagger documentation
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default {
    server: app,
    start: (port?: number) => {
        let PORT = port || process.env.PORT || 7000;
        app.listen(PORT, ()=> {console.log(`Listening on ${PORT}`)})
    }
};
