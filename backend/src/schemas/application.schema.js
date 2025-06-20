import {z} from 'zod'
//
//with this zod i controll all the data before it sends to be save 
//
export const createApplicationZ = z.object({
    title: z.string({
        message: "Title is required"
    }),
    description: z.string({
        message: "description is required"
    }),
    link: z.string().url().nullable()
})