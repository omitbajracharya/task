// import { Request, Response, Router } from 'express';
// // import { AppDataSource } from '../connection';
// // import { Items } from '../Contracts/Items';
// // import { Photo } from '../entity/Photo';
// // import { Profile } from '../entity/Profile';
// // import { User } from '../entity/User';
// import { addItem, deleteItem, findAll, findById, updatedItem } from '../Services/ItemsService';

// export const itemsRouter: Router = Router();


// ////postman insert data
// ////---for Photo----////////
// // {
// //     "name":"testing18",
// //     "description":"worktestsuccess"
// // }
// ////---for User----////////
// // {
// //     "name":"tester",
// //     "pid":2
// // }
// ////---for Profile----////////



// //GET Http Method

// //Get all items
// itemsRouter.get('/:entityName', async(req: Request, res:Response) => {
    
//     try {
//         const result = await findAll(req.params.entityName);
//         res.json(result);
//     } catch(error) {
//         res.status(404).send('Error');
//     }
// });

// //Get by ID
// itemsRouter.get('/:entityName/:id', async (req: Request, res: Response) => {
//     try {
//         const result = await findById(req.params.entityName,+req.params.id);
//         // const result = await AppDataSource.manager.findOne(Photo,1);
//         res.json(result);
//     }catch(error){
//         res.status(404).json('Error');
//     }
// });

// //POST http method
// itemsRouter.post('/:entityName', async(req:Request, res:Response) => {
//     //for new data
//     // const newDataItems: {name:string,description:string} = {
//     //     name: req.body.name,
//     //     description: req.body.description
//     // }
// //   entituName=Photo
//     try{
//         const result = await addItem <typeof req.body>(req.params.entityName,req.body);
//         res.status(200).json(result);
//     }catch(error){
//         res.json('Error');
//     }
// });


// //PUT http method
// itemsRouter.put('/:entityName/:id', async(req:Request, res:Response) => {
//     let id:number = Number(req.params.id)

//     try{
//         const result = await updatedItem(req.params.entityName,id,req.body);
//         res.status(200).json(result);
//     }catch(error){
//         res.json(error)
//     }
// })

// //DELETE http method
// itemsRouter.delete('/:entityName/:id', async(req: Request, res: Response) => {
//     let id:number = Number(req.params.id);
//     const result = await deleteItem(req.params.entityName,id);
//     res.status(200).json(result);
// })
