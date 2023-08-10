require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT


require("./config/mongoose.config")





app.use(express.json());
app.use(express.urlencoded({extended:true}))


require("./routes/jokes.route")(app)






app.listen(port, ()=>console.log(`We are live on ${port}`))