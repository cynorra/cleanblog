const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/Post');

exports.publishpost = async (req,res) => {
    if(userIN){
    try{
        const post = await Post.create(req.body);
        res.status(201).redirect('/post');
        console.log('Succesfully');
    } catch (error) {
        console.log(error);
        res.status(400).redirect('/createpost');
    }
    }
    else{
        res.status(301).send(`You don't have permission to publish a Post in this blog.`);
    }};

exports.getpost = async (req,res) => {
    try{
        const posts = await Post.find();
        res.status(200).render("post", {
            page_name : "post",
            posts
        })} catch (error) {
            console.log(error);
        }
};