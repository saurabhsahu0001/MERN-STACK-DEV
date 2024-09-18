const mongoose = require('mongoose');
const url = "mongodb+srv://saurabhsahuxxx:amansahu@cluster0.4og3z.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then((result) => {
    console.log('connect to mongodb');
}).catch((err) => {
    console.log(err);
});
module.exports= mongoose;