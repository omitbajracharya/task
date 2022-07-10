// import { getRepository, Repository } from "typeorm";
import { AppDataSource } from "../../connection";
// import { Items } from "../Contracts/Items";
import { User } from "../entity/User";
// import { dataItems } from "../Mock/ItemsMock";
import { Request, Response } from "express"
import { QueryFailedError } from "typeorm";

//for get method
export const findAll = async (req: Request, res: Response) => {
    let result = await AppDataSource.manager.find(User);
    res.json(result);
}

//getById
export const findById = async (req: Request, res: Response) => {
    let pid: number = Number(req.params.id);
    let result = await AppDataSource.getRepository(User).findOneBy({ id: pid });
    res.json(result)
}

//for post method
export const addUser =  async(req: Request, res: Response) => {
    //Inserting...
    const newUser = req.body;
    try {
        // 1-1 with profile
        const result = await AppDataSource.getRepository(User).save(newUser)
        console.log(result);
        res.json({
            data: result,
            message: "User Created Successfully"
        })
    }
    catch (error) {
            // console.log(newUser.profile)
            // console.log(await AppDataSource.manager.find(User));
            let listOfObj=await AppDataSource.manager.find(User)
            let pidObtainedFromUser=listOfObj.map((obj: any) => obj.profile.id)
            // console.log(pidObtainedFromUser)
            if(pidObtainedFromUser.includes(newUser.profile))
            {
                res.send("That profile belong to particular User...We cannot registered you for this particular profile..Firstly registered your own profile first....")
            }
    }
}

//for put method
export const updatedUser = async (req: Request, res: Response) => {
    //uid
    let pid: number = Number(req.params.id)
    let user: User = req.body
    const userRepository = AppDataSource.getRepository(User);
    userRepository.update(pid, user);
    res.json({ data: userRepository, message: "User Updated successfully" });
}

//for delete method
export const deleteUser = async (req: Request, res: Response) => {
    let pid: number = Number(req.params.id);
    const userRepository = AppDataSource.getRepository(User);
    const userToRemove = await userRepository.findOneByOrFail({ id: pid });
    await userRepository.remove(userToRemove);
    res.json({ message: "data deleted successfully...", data: await AppDataSource.manager.find(User) });
}