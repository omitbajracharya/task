// import { getRepository, Repository } from "typeorm";
import { AppDataSource } from "../../connection";
// import { Items } from "../Contracts/Items";
import { Request, Response } from "express";
import { Profile } from "../entity/Profile";
import { ProfileContract } from "../Contracts/Profile";

//for get method
export const findAll = async (req: Request, res: Response) => {
    let result = await AppDataSource.manager.find(Profile);
    res.json(result);
}
 
//getById
export const findById = async (req: Request, res: Response) => {
    let pid: number = Number(req.params.id);
    let result = await AppDataSource.getRepository(Profile).findOneBy({ id: pid });
    res.json(result);
}

//for post method
export const addProfile = async (req: Request, res: Response) => {
    //Inserting...
    const newProfile:{gender:string,photo:string} = {
        gender: req.body.gender,
        photo: req.body.photo
    };
    await AppDataSource.manager.insert(Profile, newProfile);
    res.json({"data":newProfile})
}

//for put method
export const updatedProfile = async (req: Request, res: Response) => {
    let pid:number = Number(req.params.id)
    let profile:ProfileContract=req.body
    const profileRepository = AppDataSource.getRepository(Profile);
    // const profileToUpdate = await profileRepository.findOneByOrFail({ id: pid })
    profileRepository.update(pid, profile);
    // res.json(findAll);
    // findAll(req,res);
    res.json({data:profileRepository, message:"profile Updated successfully"});
}

//for delete method
export const deleteProfile = async (req: Request, res: Response) => {
    let pid:number = Number(req.params.id);
    const profileRepository = AppDataSource.getRepository(Profile);
    const profileToRemove = await profileRepository.findOneByOrFail({ id: pid });
    await profileRepository.remove(profileToRemove);
    res.json({message:"data deleted successfully...",data:await AppDataSource.manager.find(Profile)});
}
