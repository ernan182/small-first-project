import {Private_Key} from '../config.js'
import {jwtVerify} from 'jose'

// 
// On here im validate if the user have a token and as well 
// If this token is valid using (jose) u can change for whathever
// library 
//
export const validateToken = async (req,res,next)=>{
    const {token} = req.cookies;
    if(!token) return res.status(400).json("Token is empty");

   try {
     const {payload} = await jwtVerify(
        token,
        Private_Key,{
            issuer:process.env.JWT_ISSUER,
            audience: process.env.JWT_AUDIENCE,
            maxTokenAge: '2h'
        }
    )
    console.log("user",payload)
    req.user = payload
    //We found the token of our user and now is gonna do the task 😼😼😼😼
    next()
   } catch (error) {
        console.log("Token is invalid");
   }
    
}


