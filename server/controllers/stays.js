import Stay from "../models/Stay.js"

// getAll
export const getAll = async(req, res) =>{
   try{
      const stays = await Stay.find()
      res.json(stays)

   }
   catch(err){
      res.status(500).json({
         message: "Not find"
      })
   }
}

// get by ID

export const getById = async(req, res) => {
   try{
      const stay = await Stay.findById(req.params.id)
      res.json(stay)
   }
   catch(err){
      res.status(500).json({
         message: "Not find"
      })
   }
}