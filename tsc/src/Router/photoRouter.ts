import { Request, Response, Router } from 'express';
import { findAll,findById,addPhoto, deletePhoto, updatedPhoto } from '../Controller/photoController';

// import { findAll, findById,deleteUser, updatedUser } from '../Controller/userController';
export const photoRouter: Router = Router();

//GET Http Method

//Get all user
photoRouter.get('/', findAll);

//Get by ID
photoRouter.get('/:id', findById);

//POST http method
photoRouter.post('/',addPhoto);

//PUT http method
photoRouter.put('/:id',updatedPhoto);

//DELETE http method
photoRouter.delete('/:id',deletePhoto);


