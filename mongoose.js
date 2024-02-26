const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017//consumers")
.then(()=>{
    console.log("mongoosedb connected ");
})

.catch(()=>{
    console.log("not connected");
})

const LogInScheme = new mongoose.SchemaType({
    name:{
        type :String ,
        required :true
    },
    password:{
        type :String ,
        required :true
    
    }

})