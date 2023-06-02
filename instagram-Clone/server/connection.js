const mongoose = require('mongoose');
const uri =
    'mongodb+srv://kantasaimanikanta:aaykTfqERDe3mlU0@cluster0.1akrvep.mongodb.net/instagram';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas Server to the database of instagram which is having posts collection ');
}).catch((err) => {
    console.log(err)
    console.error('Error connecting to MongoDB Atlas:', err.message);
});
module.exports = mongoose;