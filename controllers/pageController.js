const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/Post');

exports.getIndexPage = async (req,res) => {
    try{
    const latestpost = await Post.find();
    res.status(200).render("index", {
        page_name : "index",
        latestpost //For Header
        
    });
    console.log('Succesfully');
    } catch(err) {console.log(err);}
   
};

exports.getAboutPage = (req,res) => {
    res.status(200).render("about", {
        page_name : "about"
    })
};

exports.getPostPage = (req,res) => {
    console.log('Succesfully searched posts');
    
    res.status(200).render("post", {
        page_name : "post",
    })
};

exports.getContactPage = (req,res) => {
    res.status(200).render("contact", {
        page_name: "contact"
    })
};

exports.getCreatePostPage = (req,res) => {
    res.status(200).render("createpost", {
        page_name: "createpost"
    })
};

exports.getCreateAccountPage = (req,res) => {
    res.status(200).render("createaccount", {
        page_name: 'createaccount'
    })
};

exports.getLoginAccountPage = (req,res) => {
    res.status(200).render("loginaccount"), {
        page_name: 'loginaccount'
    }
};