### MongoDB is NOSQL database

# To install moongose 
npm i mongoose 

It is basically used to connect the database to node.js

# Step1:creating a Schema
const student=new mongoose.Schema({
  name:String,
  workout:Boolean,
  height:Number
})
# Step2: creating a model
const Student = new mongoose.model('Student',student)

# Step3: Perform the curd operation
# i. create
const adder =async()=>{
   const ss = await  Student.create({
    name:"Aditya",
    workout:true,
    height:170
  })
}
adder();

# ii. Read
  const sf=await Student.find();
  console.log(sf);

#  Checking the conditions
  const sr=await Student.find({height:{$gt:170}})
  console.log(sr);