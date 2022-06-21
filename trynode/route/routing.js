const express = require('express');
const router = express.Router();
// const app = express();

// app.request("/", router);

const student= require("../main");
// console.log(student);

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({"extended":false}));


router.post('/blog',(req,res)=>{
//    let ind = req.params.id - 1;
//    student[ind].id = ind;
  
      let newArray ={
            id: req.body.id,
            name: req.body.name,
            roll: req.body.roll,
            address:req.body.address,
            post:req.body.post
         }
      console.log(req.body.id);
      student.push(newArray);
    //  student=[...student,newArray];
     res.status(200).json(student);   
   })
   
   router.get('/blog/:id',(req,res)=>{
    let ind = req.params.id;
    console.log(ind);
    res.send(student);
   });

   router.put('/blog/:id',(req,res)=>{
         let ind = req.params.id - 1;
         student[ind].id = 181818;
         // student=[...student,newArray];
         res.status(200).json(student);
         });
    
        // app.use("/api",router);
      
router.delete('/blog/:id',(req,res)=>{
    id = req.params.id; 
    // student=student.filter(std=>std.id===id);
    
    const index = student.findIndex(object => object.id === id);
    // console.log(student[index]);
    console.log(index);
    student.splice(index,1);
    res.json({operation:"delete",remain_data:student});
});
  // app.listen(3000, ()=>{
  //   console.log("I m listening....");
  // }); 
  module.exports = router;