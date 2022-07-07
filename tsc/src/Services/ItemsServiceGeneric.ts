// // import { getRepository, Repository } from "typeorm";
// import { AppDataSource } from "../../connection";
// import { Items } from "../Contracts/Items";
// import { Photo } from "../entity/Photo";
// import { Profile } from "../entity/Profile";
// import { User } from "../entity/User";
// import { dataItems } from "../Mock/ItemsMock";


// //for get method
// export const findAll = async (particularEntiy:string) => {
//     return await AppDataSource.manager.find(particularEntiy);
//     // return Promise.resolve(dataItems);
// }

// //getById
// export const findById = async(particularEntiy:string,pid: number) => { 
//     // const item = dataItems.find((item) => item.id === id);
//     // if(item) {
//     //     return Promise.resolve(item);
//     // }
//     // return Promise.reject();
//         return Promise.resolve(await AppDataSource.getRepository(particularEntiy).findOneBy({id: pid}));
// }

// //for post method
// export const addItem = async <T> (particularEntiy:string, newDataThroughForm: T) => {
//     // const photo = new Photo()
//     // photo.name = newData.name
//     // photo.description = newData.description

//     ////Inserting....
//     // await AppDataSource.manager.insert(Photo,newData);
//     // return Promise.resolve(findAll());
//      await AppDataSource.manager.insert(particularEntiy,newDataThroughForm);
//      return Promise.resolve(findAll(particularEntiy));

//     // dataItems.push(newData);
//     // return Promise.resolve(dataItems);
//     // console.log(typeof newDataThroughForm);

// // export const addItem = async (newDataThroughForm: {name:string,description:string})=>{
//     // const profile = new Profile();
//     // profile.gender = 'Male';
//     // profile.photo = 'abc.jpg';

//     // const user = new User();
//     // user.name = 'Maria';
//     // user.profile = profile;

//     // let saveProfileValue = await AppDataSource.manager.save(profile);
//     // let saveUserValue = await AppDataSource.manager.save(user);
//     // return Promise.resolve("Successfully added to db..");
// }

// //for put method
// export const updatedItem = async (particularEntity:string, pid: number, item: Items) => {
//     const photoRepository = AppDataSource.getRepository(particularEntity);
//     // const dataItemById = dataItems.find((item1) => item1.id === id)
//     // if(dataItemById){
//     //     dataItemById.id = item.id;
//     //     dataItemById.title = item.title;
//     //     dataItemById.body = item.body;
//     //     return Promise.resolve(dataItemById)
//     // }else{
//     //     return Promise.reject();
//     // }


//     // const i = dataItems.findIndex((a)=>a.id === id);
//     // dataItems[i].title=item.title;
//     // dataItems[i].body=item.body;
//     // return Promise.resolve(dataItems)
//     // let result;    
   
//     const photoToUpdate = await photoRepository.findOneByOrFail({ id: pid })

// //    {id:1,name:pqr,description:xyz}
//     // if(photoToUpdate){
//         // photoToUpdate=item
//         // photoToUpdate.name = item.name
//         // photoToUpdate.description = item.description
//         photoRepository.update(pid,item);


//         // const putVal = {...photoToUpdate,...item};
//         // await photoRepository.save(putVal);

//         return Promise.resolve(findAll(particularEntity));
//     // }
   
// }

// //for delete method
// export const deleteItem = async (particularEntity:string,pid:number) => {  
    
//     // const photoToRemove = await photoRepository.findOneBy({ id: pid });
//     // if(photoToRemove)
//     // {
//     // await photoRepository.remove(photoToRemove);
//     // return Promise.resolve(findAll());
//     // }
//     // return Promise.reject();

//     const photoRepository = AppDataSource.getRepository(particularEntity);
//     const photoToRemove = await photoRepository.findOneByOrFail({ id: pid });
//     await photoRepository.remove(photoToRemove);
//     return Promise.resolve(findAll(particularEntity));

//     // const index = dataItems.findIndex((obj)=>obj.id===id);
//     // console.log(index)
//     // dataItems.splice(index,1);
//     // return Promise.resolve(dataItems);
// }