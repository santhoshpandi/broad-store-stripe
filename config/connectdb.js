const mongoose = require('mongoose')

function connectdb(){
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('Database connected')
    })
}

module.exports=connectdb