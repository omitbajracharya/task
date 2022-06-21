import { Items } from "../Contracts/Items";
import { dataItems } from "../Mock/ItemsMock";

//for get method
export const findAll = () => {
    return Promise.resolve(dataItems);
}

export const findById = (id: number) => {
    const item = dataItems.find((item) => item.id === id);
    if(item) {
        return Promise.resolve(item);
    }
    return Promise.reject();
}

//for post method
export const addItem = (newData:Items) => {
    dataItems.push(newData);
    return Promise.resolve(dataItems);
}

//for put method
export const updatedItem = (id: number, item: Items) => {
    // const dataItemById = dataItems.find((item1) => item1.id === id)
    // if(dataItemById){
    //     dataItemById.id = item.id;
    //     dataItemById.title = item.title;
    //     dataItemById.body = item.body;
    //     return Promise.resolve(dataItemById)
    // }else{
    //     return Promise.reject();
    // }
    const i = dataItems.findIndex((a)=>a.id === id);
    dataItems[i].title=item.title;
    dataItems[i].body=item.body;
    return Promise.resolve(dataItems)
}

//for delete method
export const deleteItem = (id:number) => {  
    const index = dataItems.findIndex((obj)=>obj.id===id);
    console.log(index)
    dataItems.splice(index,1);
    return Promise.resolve(dataItems);
}