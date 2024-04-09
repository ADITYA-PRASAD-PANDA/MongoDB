const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/sample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{   
  console.log("connected to MongoDB successfully"); 
}).catch((err)=>{
  console.log(err);

})

//connection established⬆️

const student=new mongoose.Schema({
  name:String,
  workout:Boolean,
  height:Number
})

//creating a Schema⬆️

const Student = new mongoose.model('Student',student)

//creating a model⬆️ Student = model name

//
const adder =async()=>{

  // const ss=new Student({
  //   name:"Adi",
  //   workout:true,
  //   height:180
  // })
 // await ss.save();

  // or we can create like this✅  
  const ss = await  Student.create({
    name:"Aditya",
    workout:true,
    height:170
  })

  // read the schema(database)
  const sf=await Student.find();
  console.log(sf);

  // Checking the conditions
  const sr=await Student.find({height:{$gt:170}})
  console.log(sr);

}

adder();