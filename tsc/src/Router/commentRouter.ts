import { Request, Response, Router } from 'express';
import { findAll,findById,deleteComment, updatedComment, addComment } from '../Controller/commentController';

// import { findAll, findById,deleteUser, updatedUser } from '../Controller/userController';
export const commentRouter: Router = Router();

//GET Http Method

//Get all user
commentRouter.get('/', findAll);

//Get by ID
commentRouter.get('/:id', findById);

//POST http method
commentRouter.post('/',addComment);


//PUT http method
commentRouter.put('/:id',updatedComment);

//DELETE http method
commentRouter.delete('/:id',deleteComment);


