import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler'

export const checkAuth = asyncHandler(async(req, res, next) =>{
   const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");  // вытаскиваем токен из хедера запроса и записываем его в const без слова bearer

   if(token){
      try{
         const decoded = jwt.verify(token, process.env.JWT_SECRET);              // если токен есть, его декодируем и сохраняем в userId
         req.userId = decoded.id;
         next()
      }
      catch (error) {
         res.status(401)
         throw new Error('Not authorized, invalid token')
       }
   }
   else {
      res.status(401)
    throw new Error('Not authorized, no token found')
   }

})