'use strict';
import { NextFunction, Request, Response } from 'express';
import { Router } from 'express';
import CategoryInterface from '../interfaces/CategoryInterface';
import CategoryModel from '../models/category/CategoryModel';

const categoryRouter = Router();

categoryRouter.get('/category/:parentId', getCategoryByCategoryGroup);
categoryRouter.get('/category', getCategory);
categoryRouter.post('/category', postCategory);

function getCategoryByCategoryGroup(
	req: Request,
	res: Response,
	next: NextFunction
) {
	CategoryModel
		.getByProperty({parentId: parseInt(req.params.parentId)})
		.then((data: Array<CategoryInterface>) => {
			res.status(200).json(data);
		})
		.catch(next);
}

function getCategory(req: Request, res: Response, next: NextFunction) {
	CategoryModel
		.get()
		.then((data: Array<CategoryInterface>) => {
      res.status(200).json(data);
		})
		.catch(next);
}

function postCategory(req: Request, res: Response, next: NextFunction) {
  CategoryModel
		.post(req.body)
		.then((data: CategoryInterface) => {
			res.status(201).json(data);
		})
		.catch(next);
}

export default categoryRouter;
