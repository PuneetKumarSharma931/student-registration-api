
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://puneetkumarsharma:puneetkumarsharma@my-mongo-cluster.mamry.mongodb.net/Student-Registrations?retryWrites=true&w=majority', {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{

    console.log('Connection Successfull!');

}).catch((e)=>{

    console.log('Something Went Wrong!');
});





