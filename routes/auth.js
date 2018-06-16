const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/',(req,res)=>{
  res.send('Bhosdika');
});

router.get('/google',passport.authenticate('google',
{scope:['profile','email']}));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),(req, res)=> {
  res.redirect('/dashboard');
  });


router.get('/verify',(req,res)=>{
if(req.user){
//console.log(req.user);
res.redirect('/');}
else{
  res.send('YOU are not authoruzed!!');
  console.log('Not AUTH!!');
}});

router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
});

module.exports = router;
