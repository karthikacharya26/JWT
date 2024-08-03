const express = require("express");
const UserModel = require("../models/user.model");
const jwt = require('jsonwebtoken');

const userRouter = express.Router();

userRouter.get("/get-user", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new UserModel({
      name,
      email,
      password,
    });
    await user.save();
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(error);
  }
});

userRouter.post("/login", async(req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({email, password})
    if(!user){
        return res.send("invalid credentials user not found")
    }
    const token = jwt.sign({ name: user.name }, 'masai');
    res.json({"msg": "logged in successfully",
        "token": token
     })
  } catch (error) {
    res.status(404).send(error);
    
  }
});

module.exports = userRouter;
