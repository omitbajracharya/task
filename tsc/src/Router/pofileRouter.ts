import { Request, Response, Router } from 'express';
import { addProfile, deleteProfile, findAll, findById, updatedProfile } from '../Controller/profileController';
export const profileRouter: Router = Router();

//GET Http Method

//Get all user
profileRouter.get('/', findAll);

//Get by ID
profileRouter.get('/:id', findById);

//POST http method
profileRouter.post('/',addProfile);


//PUT http method
profileRouter.put('/:id',updatedProfile);

//DELETE http method
profileRouter.delete('/:id',deleteProfile);


