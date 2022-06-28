import { Request, Response, Router } from 'express';
// import { AppDataSource } from '../connection';
// import { Items } from '../Contracts/Items';
// import { Photo } from '../entity/Photo';
import { addItem, deleteItem, findAll, findById, updatedItem } from '../Services/ItemsService';

export const itemsRouter: Router = Router();

//GET Http Method

//Get all items
itemsRouter.get('/', async(req: Request, res:Response) => {
    try {
        const result = await findAll();
        
        res.json(result);
    } catch(error) {
        res.status(404).send('Error');
    }
});

//Get by ID
itemsRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await findById(+req.params.id);
        // const result = await AppDataSource.manager.findOne(Photo,1);
        res.json(result);
    }catch(error){
        res.status(404).json('Error');
    }
});

//POST http method
itemsRouter.post('/', async(req:Request, res:Response) => {
    //for new data
    // const newDataItems: {name:string,description:string} = {
    //     name: req.body.name,
    //     description: req.body.description
    // }
    try{
        const result = await addItem(req.body);
        res.status(200).json(result);
    }catch(error){
        res.json('Error');
    }
});


//PUT http method
itemsRouter.put('/:id', async(req:Request, res:Response) => {
    let id:number = Number(req.params.id)

    try{
        const result = await updatedItem(id, req.body);
        res.status(200).json(result);
    }catch(error){
        res.json(error)
    }
})

//DELETE http method
itemsRouter.delete('/:id', async(req: Request, res: Response) => {
    let id:number = Number(req.params.id);
    const result = await deleteItem(id);
    res.status(200).json(result);
})
