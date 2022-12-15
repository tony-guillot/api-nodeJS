
const express = require('express')
const app = express()

require('./model/database')
app.listen(3000,()=> console.log('sever started :3000'))



var usersRouter = require('./router/users')
// var usersGroups = require('./router/groups')

app.use(express.json())
app.use('/users', usersRouter)
// app.use(groupsRouter)




  
 