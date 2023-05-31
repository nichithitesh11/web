const dbConnect=require('./mongodb')
const express=require('express');
const {response}=require('express');
const app=express();
app.use(express.json())

app.get('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.find().toArray();
    res.send(result);
})

app.post('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.insertOne({name:"Yash",email:"abc@gmail.com",city:"Pune"});
    res.send("Data Inserted Successfully")
})

app.put('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.updateOne({name:"Yash"},{$set:{city:"Mumbai"}});
    console.log("Updated")
    res.send("Data Updated Successfully");
});

app.delete('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.deleteOne({name:"Yash"},{$set:{city:"Mumbai"}});
    console.log("Updated")
    res.send("Data Deleted Successfully");
});



app.listen(3000);