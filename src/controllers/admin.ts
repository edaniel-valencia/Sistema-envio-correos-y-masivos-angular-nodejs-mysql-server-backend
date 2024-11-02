import { Request, Response } from "express";
import { Admin } from "../models/admin";




export const Auth = async (req: Request, res: Response) => {

    const { Aemail, Apassoword } = req.body
    
   
    try {
        const admin = await Admin.findOne({ where: { Aemail: Aemail } });

        if(!admin){
            return res.status(400).json({
                msg: "No se ha datos"
            });
        }

        console.log(req.body);
       
        return res.status(200).json({
            msg: `Exitoso `
        })

    } catch (error) {

        console.error(error);
        
        return res.status(500).json({
            msg: `Error `
        })
        
    } 

}



