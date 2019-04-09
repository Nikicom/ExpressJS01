const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const User=require('../models/user')

//Read the users list from mlab
router.get('/list', (req, res)=> {
  //find all users
 /*User.find((err, result)=>{
        if(err) throw err
        console.log(result)
        res.render('userList', {
            users:result
        })
    })
});*/

const query = User.find();
query.sort({'created_at': -1});
//query.limit(4);
query.exec((err, result)=>{
          if(err) throw err
          console.log(result)
          res.render('userList', {
              users:result
          })
      })
    });
/*router.get('/list', (req, res)=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(myUsers => {
        res.render('userList', {
            users: myUsers
        });
    });
});
*/

router.get('/detail', (req, res)=> {
   res.redirect('/');
});

router.get('/login', (req, res)=> {
    res.send('User Login Page');
});

router.get('/add', (req, res)=> {
    res.send('User is added...')
});

router.get('/profile', (req, res) => {
    res.render('profile', {
      pageTitle: 'Profile page',
      name: 'Zoya'
    });
 });

router.get('/ahmadk', (req, res) => {
   res.render('ahmadk');
});

// registration
router.get('/signup', (req, res)=> {
    res.render('signup');
});

router.post('/signup', (req, res)=> {
    console.log(req.body);

   let newUser=new User({
    name: req.body.username,
    age: req.body.age,
    country:  req.body.country,
    email: req.body.email,
    password:  req.body.password,
    created_at: Date.now()
   })
// save the new user in DB and show in the profile page
   newUser.save(err=>{
       if (err)throw err
       /*res.render('profile', {
           userData: req.body
       })*/
res.redirect('/user/list')

    });
});
router.get('/detail/:id', (req, res) => {
    let userId =req.params.id;
 /*   const query = User.findById(userId,(err, result)=>{
        if (err)throw err 
        res.render('profile', {userData: result
        }) 
    }) */
    const query = User.findOne({_id:userId})
    query.exec((err, result)=>{
        if (err)throw err 
        res.render('profile', {userData: result
        }) 
    })
 });

 //Delete the user
 router.get('/delete/:id', (req, res) => {
    let userId =req.params.id;
    const query = User.findOneAndDelete()
    query.where({_id:userId})
    query.exec((err, result)=>{
        if (err)throw err 
        console.log('user is deleted.')
        res.redirect('/user/list') 
    })
 })

 //Update user
router.get('/update/:id', (req, res) => {
    let userId =req.params.id;
    const query = User.findById({_id:userId})
    query.exec((err, result)=>{
        if (err)throw err 
        res.render('userEdit', {user: result})
    })
 })

 router.post('/update/:id', (req, res) => {
    let userId =req.params.id;
    const query = User.findByIdAndUpdate(userId,{
        name: req.body.username,
        age: req.body.age,
        country: req.body.country,
        email: req.body.email,
        password: req.body.password
    });
    query.exec((err, result)=>{
        if (err)throw err 
        res.redirect('/user/list')
    });
 })

module.exports = router;