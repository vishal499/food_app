const mongoose = require('mongoose');

const mongoURI='mongodb://vishalraoo9838:Vishal123@ac-dw1upcv-shard-00-00.hcq8ano.mongodb.net:27017,ac-dw1upcv-shard-00-01.hcq8ano.mongodb.net:27017,ac-dw1upcv-shard-00-02.hcq8ano.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-zas1vk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'


const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Database connected successfully');

    const fetched_data=await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodcategory=await mongoose.connection.db.collection("foodcategory");
    const catdata = await foodcategory.find({}).toArray();

    global.food_items=data;
    global.foodcategory=catdata;

    // console.log(data.length, catdata.length)
    
    // foodcategory.find({}).toArray(function (err,catData){
    //   if(err) console.log(err);
    //   else{
    //     global.food_items=data;
    //     global.foodcategory=catData;
    //   }
    // })


    // console.log(data);
    // global.food_items = data;
    
    

  }
   catch (err) {
    console.error('Database connection error', err);
  }


  };
  
  



module.exports = mongoDB;



// await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
//   if(err) console.log("---",err);

//   else{

//     console.log("connected"); 
//   }

// });







