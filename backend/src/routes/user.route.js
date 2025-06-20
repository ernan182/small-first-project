import { Router } from "express";
import { login, logout, profile, profileUpdate, register, validateTok } from "../controllers/auth.controller.js";
import {validateToken} from '../middlewares/validateToke.js'
import validateSchema from "../middlewares/validateSchema.js";
import { loginZ, profileUser, registerZ } from "../schemas/auth.schema.js";

//
//This are tthe routes to do req and res
//

const route = Router();

route.post('/register',validateSchema(registerZ),register);
route.post('/login',validateSchema(loginZ),login);
route.get('/logout',validateToken,logout);
route.get('/profile',validateToken,profile);
route.get('/validate',validateTok);
route.put('/profile',validateToken,validateSchema(profileUser),profileUpdate);

export default route;