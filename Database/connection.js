const mongoose = require('mongoose')

try {
    mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",()=>{
    console.log("DB Connected")
})
} catch (error) {
    console.log(error)
}

