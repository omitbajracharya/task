import { getRepository, Repository } from "typeorm";
import { AppDataSource } from "../app";
import { Items } from "../Contracts/Items";
import { Photo } from "../entity/Photo";
import { dataItems } from "../Mock/ItemsMock";

//for get method
export const findAll = async () => {
    return await AppDataSource.manager.find(Photo);
    // return Promise.resolve(dataItems);
}

//getById
export const findById = async(pid: number) => {
    const photoRepository = AppDataSource.getRepository(Photo)
     const result = await photoRepository.findOneBy({
            id: pid,
        })
    // const item = dataItems.find((item) => item.id === id);
    // if(item) {
    //     return Promise.resolve(item);
    // }
    // return Promise.reject();
        return Promise.resolve(result);
}

//for post method
export const addItem = async(newData: {name:string,description:string}) => {
    const photo = new Photo()
    photo.name = newData.name
    photo.description = newData.description
    let result =  await AppDataSource.manager.save(photo)
    console.log("Photo has been saved. Photo id is", photo.id)
    return Promise.resolve(result);
    // dataItems.push(newData);
    // return Promise.resolve(dataItems);
}

//for put method
export const updatedItem = async (pid: number, item: Items) => {
    // const dataItemById = dataItems.find((item1) => item1.id === id)
    // if(dataItemById){
    //     dataItemById.id = item.id;
    //     dataItemById.title = item.title;
    //     dataItemById.body = item.body;
    //     return Promise.resolve(dataItemById)
    // }else{
    //     return Promise.reject();
    // }


    // const i = dataItems.findIndex((a)=>a.id === id);
    // dataItems[i].title=item.title;
    // dataItems[i].body=item.body;
    // return Promise.resolve(dataItems)
    let result;    
    const photoRepository = AppDataSource.getRepository(Photo)
    const photoToUpdate = await photoRepository.findOneBy({
        id: pid,
    })
    if(photoToUpdate){
        photoToUpdate.name = item.name
        photoToUpdate.description = item.description
        await photoRepository.save(photoToUpdate)
        return Promise.resolve(findAll())
    }
    return Promise.reject();
}

//for delete method
export const deleteItem = async (pid:number) => {  
    const photo = new Photo()
    const photoRepository = AppDataSource.getRepository(Photo)
    const photoToRemove = await photoRepository.findOneBy({
        id: pid,
    })
    if(photoToRemove)
    {
    await photoRepository.remove(photoToRemove)
    return Promise.resolve(findAll())
    }

    // const index = dataItems.findIndex((obj)=>obj.id===id);
    // console.log(index)
    // dataItems.splice(index,1);
    // return Promise.resolve(dataItems);
}