
const db = require('../model/database.js')

 class User{



    listUsers(req,res){

        db.query('SELECT * FROM users', [], function(err, data){


            if(err){
                throw err 
            }
            console.log(data)
            res.send(data)
        })
    }
    getUser(req,res){

        db.query('SELECT * FROM users WHERE id=?',[req.params.id], function(err, data) { //req.param = object (users par ex)

            console.log(req.params.id)
            if(err){
                throw err 
            }
            console.log(data)
            res.send(data)
        })

    }

    register(req,res){

        
    req.body.created_at = new Date();
    req.body.updated_at = new Date();
    console.log(req.body)

    db.query("INSERT INTO users SET ? ", [req.body], function(err,data){
       
        if(err){
            console.log(err)
        }else{
            res.status(200)
        }

        res.send(req.body) 
        });
        
        }

        
    }
 

 module.exports = User;