import { AppDataSource } from "../../connection";
import { Request, Response } from "express";
import { CommentContract } from "../Contracts/Comments";
import { Photo } from "../entity/Photo";
import { PhotoContract } from "../Contracts/Photo";

//for get method
export const findAll = async (req: Request, res: Response) => {
    let result = await AppDataSource.manager.find(Photo);
    res.json(result);
}
 
//getById
export const findById = async (req: Request, res: Response) => {
    let cid: number = Number(req.params.id);
    let result = await AppDataSource.getRepository(Photo).findOneBy({ id: cid });
    res.json(result);
}

//for post method
export const addPhoto = async (req: Request, res: Response) => {
    //Inserting...
    const newPhoto=req.body;
    console.log(newPhoto);
    // await AppDataSource.manager.insert(Photo, newPhoto);
    res.json({"data":newPhoto,"msg":"success insert"})
}

//for put method
export const updatedPhoto = async (req: Request, res: Response) => {
    let cid:number = Number(req.params.id)
    let comment:PhotoContract=req.body
    const photoRepository = AppDataSource.getRepository(Photo);
    // const profileToUpdate = await profileRepository.findOneByOrFail({ id: pid })
    photoRepository.update(cid, comment);
    // res.json(findAll);
    // findAll(req,res);
    res.json({data:photoRepository, message:"profile Updated successfully"});
}

//for delete method
export const deletePhoto = async (req: Request, res: Response) => {
    // uid 
    let pid:number = Number(req.params.id);
    const photoRepository = AppDataSource.getRepository(Photo);
    const photoToRemove = await photoRepository.findOneByOrFail({ id: pid });
    await photoRepository.remove(photoToRemove);
    res.json({message:"data deleted successfully...",data:await AppDataSource.manager.find(Photo)});
}
