import { Private_Key } from '../config.js';
import {SignJWT} from 'jose';

//
// This code generate the token 😼😼😼😼
// Using jose
//
export async function generateToken(payload){
    try{
        const token =  await new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setIssuer(process.env.JWT_ISSUER) // issuer
            .setAudience(process.env.JWT_AUDIENCE) // audience
            .setExpirationTime('2h')
            .sign(Private_Key);

        return token;
    }catch(err){
        console.log(err)
    }
}
    

