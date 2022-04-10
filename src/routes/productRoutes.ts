'use strict';

import { NextFunction, Request, Response } from 'express';
import { Router } from 'express';
import ProductInterface from '../interfaces/ProductInterface';
import ProductModel from '../models/product/ProductModel';
import ProductContext from '../states/product/ProductContext';

const productRouter = Router();
productRouter.get(
	'/getProductListByStateAndTransfer/:state',
	getProductListByStateAndTransfer
);
productRouter.get('/product', getProduct);
productRouter.post('/product', postProduct);
productRouter.delete('/product/:id', deleteProduct);

function getProductListByStateAndTransfer(
	req: Request,
	res: Response,
	next: NextFunction
) {
	ProductModel.getByProperty({state: req.params.state})
		.then(async (data: Array<ProductInterface>) => {
			for (const product of data) {
				const context = new ProductContext(product);
				await context.next();
			}
			res.status(200).json(data);
		})
		.catch(next);
}

function getProduct(req: Request, res: Response, next: NextFunction) {
	ProductModel.get()
		.then((data: Array<ProductInterface>) => {
			res.status(200).json(data);
		})
		.catch(next);
}

function postProduct(req: Request, res: Response, next: NextFunction) {
	ProductModel.post(req.body)
		.then((data: any) => {
			res.status(201).json(data);
		})
		.catch(next);
}

function deleteProduct(req: Request, res: Response, next: NextFunction) {
	ProductModel.delete(req.params.id)
		.then((data: any) => {
			res.status(200).json(data);
		})
		.catch(next);
}

export default productRouter;
