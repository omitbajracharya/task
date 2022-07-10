import { AppDataSource } from "../../connection";
import { Request, Response } from "express";
import { CommentContract } from "../Contracts/Comments";
import { Comment } from "../entity/Comment"
import { idText } from "typescript";

//for get method
export const findAll = async (req: Request, res: Response) => {
    let result = await AppDataSource.manager.find(Comment);
    res.json(result);
}
 
//getById
export const findById = async (req: Request, res: Response) => {
    let cid: number = Number(req.params.id);
    let result = await AppDataSource.getRepository(Comment).findOneBy({ id: cid });
    res.json(result);
}

//for post method
export const addComment = async (req: Request, res: Response) => {
    //Inserting...
    const newComment=req.body;
    console.log(newComment);
    // await AppDataSource.manager.insert(Comment, newComment);
    res.json({"data":newComment,"msg":"success insert"})
}

//for put method
export const updatedComment = async (req: Request, res: Response) => {
    let cid:number = Number(req.params.id)
    let comment=req.body;
    let uid:number = req.body.user;

    try{
        const profileRepository = AppDataSource.getRepository(Comment);
    const profileToUpdate = await profileRepository.findOneByOrFail({ id: cid })
    // profileRepository.update(cid, commentText);
    console.log(profileToUpdate.photo.id)
    if(uid===profileToUpdate.user.id){
        console.log(profileToUpdate.user.id);
        console.log(comment);
    profileRepository.update(cid, comment);
    console.log("Hello Omit");
    // res.json(findAll);
    // findAll(req,res);
    res.json({data:profileToUpdate, message:"profile Updated successfully"});
    }else{
        res.send("You can not update this comments");
    }
    }
    
    catch(error){
        res.send("error"+error);
    }
}

//for delete method
export const deleteComment = async (req: Request, res: Response) => {
    // uid 
    let cid:number = Number(req.params.id);
    let uid:number = req.body.user
    
    const commentRepository = AppDataSource.getRepository(Comment);
    const commentToRemove = await commentRepository.findOneByOrFail({ id: cid });
    // console.log(commentToRemove.photo.user.id);
    // res.json({comment:commentToRemove});
    if(uid===commentToRemove.user.id || uid===commentToRemove.photo.user.id)
    {
        await commentRepository.remove(commentToRemove);
        res.json({message:"data deleted successfully...",data:await AppDataSource.manager.find(Comment)});
    }
    else{
        res.send("cannot delete..")
    }
    
}
