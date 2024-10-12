import express from 'express';
import bcrypt from 'bcrypt';
import User from '../model/user.js';
//import generateToken from '../utils/generateToken.js';
import resetToken from '../utils/resetToken.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post("/signup",async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const userExists = await User.findOne({email});
        const hashedPassword = await bcrypt.hash(password,10);    
        if(!userExists){
            const newUser = new User({name, email, password:hashedPassword});
            await newUser.save();
            return res.status(201).json({message: "Account Created"});
        }
        return res.status(409).json({message:"Email already exists"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post("/signin",async(req,res)=>{
    try{
        const {email,password} = req.body;
        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(404).json({message:"Email not exists"});
        }
        const isMatch = await bcrypt.compare(password,userExists.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid password"});
        }
        //const token = generateToken(userExists);
        res.status(200).json({message:"Sign in successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post("/reset-token",async(req,res)=>{
    try{
        const {email} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"Email not exists"});
        }
        const {token, expiresTime} = resetToken;
        user.resetPasswordToken = token;
        user.resetPasswordExpires = expiresTime;
        await user.save();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: "pawnmugi@gmail.com",
                pass: "wzizwinynxekaahw"
            },
        });
        const message = {
            from: "pawnmugi@gmail.com",
            to: user.email,
            subject: "Password reset request code",
            text: `You are receiving this email by your request to reset your account password.\n\n Please use the following token to reset your password :${token}\n\n If not please ignore this email, kindly!`,
        }
        transporter.sendMail(message,(error,info)=>{
            if(error){
                return res.status(404).json({message:"Oops! something went wrong, try again.."});
            }
            return res.status(200).json({message:"Email sent "+ info.response});
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post("/reset-password/:token",async(req,res)=>{
    try{
        const {token} =  req.params;
        const {password} = req.body;
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {$lt: Date.now()},
        });
        if(!user){
            return res.status(404).json({message:"Invalid token"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        user.password = hashedPassword;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();
        return res.status(200).json({message:"Password changed successfully!"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

export default router;