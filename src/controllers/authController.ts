import { Request,Response} from "express";


import { date, z } from "zod";
import { db } from "../utils/db.server";
import { fromZodError } from "zod-validation-error"
import * as jwt from "jsonwebtoken"
;
import { encryptPassword,checkPassword } from "../utils/cryptPassword";

const secret  =  process.env.SECRET as string


 export const signupSchema = z.object({

    username:z.string(),
    email:z.string().email("O email e obrgatorio").toLowerCase(),
    password:z.string().min(8,"A senha nao deve ter menos de 8 caracteres "),
    confirmPassword:z.string().min(8,"A senha nao deve ter menos de 8 caracteres ")


})


const loginSchema = signupSchema.pick({
    email: true,
    password: true
  });



  


export const signup = async (req: Request, res: Response) => {

    try {
        
        const validation = signupSchema.safeParse(req.body);
        if(!validation.success){
            return  res.status(400).json({message:fromZodError(validation.error).details})
        }

        if(validation.data.password !== validation.data.confirmPassword){
           return res.status(400).json({message:"The passwords do not match"})
        }
        const passwordHash  =  await encryptPassword(validation.data.password)

        const existingEmail  =  await db.user.findUnique({
            where:{
                email:validation.data.email
            }
        })

        if(existingEmail){

            res.status(400).json({message:"The email already exists, please enter a new one"})
        }

       const  newUser =  await db.user.create({
        data:{
            username:validation.data.username,
            email:validation.data.email,
            password: passwordHash,
        },
        
       }
          
        )

        res.status(201).json({message:"user created "})
       


    } catch (error) {
        console.log(error)
        
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



export const login =  async (req: Request, res: Response) => {
    const validation = loginSchema.safeParse(req.body);

    if(!validation.success){
        return  res.status(400).json({message:fromZodError(validation.error).details})
    }
    try{
        const user = await db.user.findUnique({
            where:{
                email:validation.data.email
            },
    
          
        
        })

        if(!user){
            return  res.status(404).json({message:"user not found"})

        }
       
        if(! await checkPassword(validation.data.password,user?.password)){
            return  res.status(400).json({message:"invalid password"})
        }


        const token  =   jwt.sign({id:user.id, role:user.role},secret,{expiresIn:"30d"})

        res.status(200).json({message:"authenticated user",token})

    }catch (error) {
        
        return res.status(500).json({ message: "Internal Server Error" });
    }
    
   

}

