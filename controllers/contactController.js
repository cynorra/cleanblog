const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../models/Contact');

exports.sendcontact = async (req,res,next) => {
   await Contact.create(req.body);
   console.log('succesfully sended contact details.');
   res.status(201).redirect('/');
   next();    
}

exports.getcontacts = async (req,res,next) => {
    
    function pageloader() {
    console.log('Page is loading');
    var i=100;
    for(i;i<=0;i--){
    Contact.find();
    }
    }
    pageloader();


    if(userIN){
    try{
    
    const contacts = await Contact.find();
    console.log('Searched Contacts..');
    res.status(201).render('contacts', {
        page_name: 'contacts',
        contacts
    })
    }
    catch(e) {
        console.log(e);
        res.status(301).send(`Something Error`);
    }}
    else {
        res.status(301).send(`You don't have a permission to see Contacts`);
    }}
