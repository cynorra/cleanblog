const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

exports.createAccount = async (req,res) => {
    try {
        const users = await User.create(req.body);
        res.status(201).redirect('/');
        console.log('Succesfully Created this account');
    }
    catch (error) {
        console.log(error);
    }

};

exports.loginAccount = async (req,res,next) => {
    try {
        const {username,password} = req.body;
        User.findOne({username}, (err,user) => {
            if(user){
                const dbpassword = user.password;
                const dbid = user._id;

                if(dbpassword === password){
                    console.log('succesfully authorized');
                    req.session.userID = dbid;
                    userIN = req.session.userID;
                    res.redirect('/');
                    next();
                }
                else{
                    console.log('Wrong Password');
                    res.redirect('/loginaccount');
                    next();
                }}
            else{
                console.log('User Not Found');
                console.log(err);
                res.redirect('/loginaccount');
                next();
            }    
        })} catch (e) {
            console.log(e);
        };};
            

  exports.logoutAccount =  (req,res,next) => {
     
        userIN = null;
        console.log('Succesfully');
        res.status(200).redirect('/');
        next();
    
  }      
                
