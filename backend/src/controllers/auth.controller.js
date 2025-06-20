import { generateToken } from '../libs/token.js';
import User from '../models/user.models.js'
import bcrypt from 'bcrypt'
import {jwtVerify} from 'jose'
import { Private_Key } from '../config.js';

//
// Here is the controller for the User where I config for the 
// login ,register,logout,profile,updateProfile and validate or token
//  

export const register = async (req,res)=>{
    const {username,email,password} = req.body;

    try {
        const userFound = await User.findOne({username});
        if(userFound) return res.status(400).json("User is already resgistered")
        const userEmailFound = await User.findOne({email});
        if(userEmailFound) return res.status(400).json("Email is already resgistered")
            
        const password_encripted = await bcrypt.hash(password,10)
        const newUser = new User({
            username,email,password:password_encripted
        })

        const saveUser = await newUser.save();
        const token = await generateToken({id:saveUser._id.toString()})
        res.cookie("token",token)
        res.json(saveUser);
    } catch (error) {
        res.status(400).json(error)
    }

}
export const login = async (req,res)=>{
    const {username,password} = req.body;

    try{
        const foundUser = await User.findOne({username});
        if(!foundUser) return res.status(400).json("User not found");
        const isMatch = await bcrypt.compare(password,foundUser.password);
        if(!isMatch) return res.status(400).json("Wrong password");
        
        const token = await generateToken({id: foundUser._id.toString()});
        res.cookie("token",token)

        res.json({
            _id: foundUser._id,
            username: foundUser.username
        })
    }catch(error){
        res.status(400).json(error)
    }
}
export const logout = async (req,res)=>{
    res.cookie("token"," ",new Date(0))
    res.sendStatus(200);
}
export const profile = async (req,res)=>{
    try {
        const userFound = await User.findById(req.user.id)
        if(!userFound) return res.status(204).json("User not found");
        res.json({
            username: userFound.username,
            email: userFound.email,
            password: userFound.password,
            name: userFound.name,
            phonenumber: userFound.phonenumber,
            profile_picture: userFound.profile_picture,
        })
    } catch (error) {
        res.status(400).json(error)
    }
}
export const profileUpdate = async (req,res)=>{
    try{
        const updateData = {...req.body}
        
        if(updateData.password && updateData.password.trim() !== ''){
            updateData.password = await bcrypt.hash(updateData.password,10);
        }else{
            delete updateData.password
        }
        if(req.file){
            const imgUrl = `/api/img/${req.file.filename}`;
            updateData.profile_picture = imgUrl;
        }
        const userFound = await User.findByIdAndUpdate(req.user.id,updateData,{new:true})
        if (!userFound) return res.status(400).json('Something went wrong');

        res.json({
        username: userFound.username,
        email: userFound.email,
        name: userFound.name,
        phonenumber: userFound.phonenumber,
        profile_picture: userFound.profile_picture,
        });
    }catch(error){
        res.status(400).json("something went wrong");
    }

}

export const validateTok =async (req,res)=>{
    const {token} = req.cookies;
    if(!token) return res.status(400).json("Token is empty");
    try{
       const {payload} =  await jwtVerify(
            token,
            Private_Key,{
                issuer: process.env.JWT_ISSUER, // issuer
                audience: process.env.JWT_AUDIENCE, // audience
                maxTokenAge: '2h',
            }
        )
        const userFound = await User.findById(payload.id)
        if(!userFound) return("user not found")
        res.json({
            id: userFound._id,
            username: userFound.username
        })
    }catch(e){
        //res.status(400).json("invalid token")
    }
    

}
