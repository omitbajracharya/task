import { Request, Response, Router } from 'express';
import { addUser, deleteUser, findAll, findById, updatedUser } from '../Controller/userController';
export const userRouter: Router = Router();



//GET Http Method

//Get all user
userRouter.get('/', findAll);

//Get by ID
userRouter.get('/:id', findById);

//POST http method
userRouter.post('/',addUser);


//PUT http method
userRouter.put('/:id',updatedUser);

//DELETE http method
userRouter.delete('/:id',deleteUser);


