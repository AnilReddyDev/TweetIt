const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const createUser = asyncHandler(async (req,res)=>{
    const {username, email, password} = req.body;

    if(!username && !email && !password){
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    const userFound = await User.findOne({email});
    if (userFound) {
        res.status(400);
        throw new Error("User already registered");
      }
    
    const user = await User.create({
        username,
        email,
        password
    })

    if (user) {
        res.status(201);
        res.json({ _id: user.id, email: user.email });
      } else {
        res.status(400);
        throw new Error("User data not valid");
      }

    })

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"loginUser success"})
})

const currentUser = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.params.id)
    res.json(user)
})

module.exports = {createUser, loginUser, currentUser}