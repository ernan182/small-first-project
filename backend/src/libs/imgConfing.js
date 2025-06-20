import multer from "multer";
import path from 'path';
import { fileURLToPath } from 'url';

//
// Here are the defaults configuration for our img file
// 

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        const dest = path.join(__dirname, '../img');
        cb(null, dest);
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
})

export const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}