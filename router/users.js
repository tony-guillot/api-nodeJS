
  const express = require('express');
  var router = express.Router();
  const usersController = require('../controller/usersController.js');
  let user = new usersController();
  
  router.get('/', user.listUsers)
  router.get('/:id',user.getUser)
  router.post('/register',user.register)



  // router.get('/users/login', (req, res) => {
    
  // })
  
  
  // router.get('/users/register', (req, res) => {
  //   res.send('register')
  // })
  
  // router.post('/users/groupe', (req, res) => {
  //   res.send('register')
  // })
  
  // router.get('/users/userinfo', (req, res) => {
  //   res.send('ok')
  // })
  
  // router.post('/users/update', (req, res) => {
  //   res.send('ok')
  // })

  module.exports = router;