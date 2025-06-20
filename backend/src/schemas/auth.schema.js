import {z} from 'zod'
//
//with this zod i controll all the data before it sends to be save 
//

export const registerZ = z.object({
    username: z.string({
        message: "Username is required"
    }).min(5,{message:"Make sure to have 5 charactares"}),
    email: z.string({
        message: "Email is required"
        }).email({
            message:"It must be a valid email"
        }),
    password: z.string({
          message: "Username is required"
        }).min(8,{message:"At least 8 characteres 😼"})
})

export const loginZ = z.object({
    username: z.string({
        message: "Username is required"
    }).min(5,{message:"Make sure to have 5 charactares"}),
    password: z.string({
          message: "Username is required"
        }).min(8,{message:"At least 8 characteres 😼"})
})

export const profileUser = z.object({
    username: z.string({
        message: "Username is required"
    }).min(5,{message:"Username min 5 charactares"}),
    email: z.string({
        message: "Email is required"
        }).email({
            message:"It must be a valid email"
        }),
    password: z.string(
        ).min(8,{message:"Password min 8 characteres 😼"
        }).or(z.literal('')),
    name: z.string().min(5,{
        message:"Name is  short at least 5 characteres😼",
        }).or(z.literal('')),
    phonenumber: z.string()
        .regex(/^\d+$/, { message: "Just numbers 🤖" })
        .or(z.literal('')),
    profile_picture: z.instanceof(File).
    refine(
    (file) => ['image/png', 'image/jpeg'].includes(file.type),
    {
      message: 'Only PNG and JPG files are allowed.',
    }).optional()
})