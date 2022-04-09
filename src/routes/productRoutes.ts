'use strict';

import { NextFunction, Request, Response } from 'express';
import { Router } from 'express';
import ProductInterface from '../interfaces/ProductInterface';
import ProductModel from '../models/product/ProductModel';
import ProductContext from '../states/product/ProductContext';

const productRouter = Router();
productRouter.get(
	'/getProductListByStateAndTransfer',
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
		.then((data: Array<ProductInterface>) => {
			data.forEach(product=> {
				const context = new ProductContext(product);
			});
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
	ProductModel.delete(parseInt(req.params.id))
		.then((data: any) => {
			res.status(200).json(data);
		})
		.catch(next);
}

export default productRouter;
