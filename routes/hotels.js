import express  from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();



// create
router.post("/",async (req,res)=>{
    const newHotel = new Hotel(req.body)
    try{
      const saveHotel = await newHotel.save()
      res.status(200).json(saveHotel)
    }catch(error){
             res.status(500).json(error)
    }
})

export default router;