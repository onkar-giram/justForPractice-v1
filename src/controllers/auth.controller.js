const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')


// need to refactor later
const signup = async (req, res) => {

    const { name , email , password, role} = req.body;
    try { 
        const findUser = await User.findOne({email : email})
        if(findUser) {
            res.status(500).json({
            message: "user already exists",
            success: false
            }).end()
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role})
        await newUser.save();
        res.status(201).json("User Created Successfully");
        
    } catch (error) {
        res.send(`Error while registering user: ${error}`)
    }
    
} 




module.exports = {signup}