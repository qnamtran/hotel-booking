const mongoose = require ('mongoose');
const URI = 'mongodb+srv://cp440Student:p0JkvhRTMhqtbruZ@westbestern.5aniarq.mongodb.net/WestBesternDev?retryWrites=true&w=majority';
const connectDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log('Database Connected');
    }catch(err){
        console.log('Connection failure');
    }
}
mongoose.connect(URI);

module.exports = connectDB;
