const mongoose = require('mongoose');
function connectToDatabase() {
    mongoose.connect('mongodb+srv://lamibabu:atlas2mongo@cluster0.aj8hbet.mongodb.net/internship')
    .then(() => {
        console.log('connected to MongoDB successfully');
    })
    
}
 
module.exports = connectToDatabase;