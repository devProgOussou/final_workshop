const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to mongodb');
}).catch((err) => {
    console.log('Error: ', err);
})