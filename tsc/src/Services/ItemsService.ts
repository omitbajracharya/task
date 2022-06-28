// import { getRepository, Repository } from "typeorm";
import { AppDataSource } from "../../connection";
import { Items } from "../Contracts/Items";
import { Photo } from "../entity/Photo";
import { dataItems } from "../Mock/ItemsMock";

const photoRepository = AppDataSource.getRepository(Photo);
//for get method
export const findAll = async () => {
    return await AppDataSource.manager.find(Photo);
    // return Promise.resolve(dataItems);
}

//getById
export const findById = async(pid: number) => { 
    // const item = dataItems.find((item) => item.id === id);
    // if(item) {
    //     return Promise.resolve(item);
    // }
    // return Promise.reject();
        return Promise.resolve(await AppDataSource.getRepository(Photo).findOneBy({id: pid}));
}

//for post method
export const addItem = async(newData: {name:string,description:string}) => {
    // const photo = new Photo()
    // photo.name = newData.name
    // photo.description = newData.description

    ////Inserting....
    await AppDataSource.manager.insert(Photo,newData);
    return Promise.resolve(findAll());
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
    // let result;    
   
    const photoToUpdate = await photoRepository.findOneByOrFail({ id: pid })

//    {id:1,name:pqr,description:xyz}
    // if(photoToUpdate){
        // photoToUpdate=item
        // photoToUpdate.name = item.name
        // photoToUpdate.description = item.description

        const putVal = {...photoToUpdate,...item};
        await photoRepository.save(putVal);
        return Promise.resolve(putVal);
    // }
   
}

//for delete method
export const deleteItem = async (pid:number) => {  
    
    const photoToRemove = await photoRepository.findOneBy({ id: pid });
    if(photoToRemove)
    {
    await photoRepository.remove(photoToRemove);
    return Promise.resolve(findAll());
    }
    return Promise.reject();

    // const index = dataItems.findIndex((obj)=>obj.id===id);
    // console.log(index)
    // dataItems.splice(index,1);
    // return Promise.resolve(dataItems);
}