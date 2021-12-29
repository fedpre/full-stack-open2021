const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

console.log('connecting to', url);

mongoose.connect(url)
    .then(result => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error.message);
    })

    const noteSchema = new mongoose.Schema({
        name: String,
        number: String,
    })

    noteSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject._id.toString()
            delete returnedObject._id
            delete returnedObject.__v
        }
    })
    
    module.exports = mongoose.model('Person', noteSchema)