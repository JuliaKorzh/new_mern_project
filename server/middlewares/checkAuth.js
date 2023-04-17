import jwt from "jsonwebtoken";


export const checkAuth = async(req, res, next) =>{
   const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");  // вытаскиваем токен из хедера запроса и записываем его в const без слова bearer

   if(token){
      try{
         const decoded = jwt.verify(token, process.env.JWT_SECRET);              // если токен есть, его декодируем и сохраняем в userId
         req.userId = decoded.id;
         next()
      }
      catch (error) {
         return res.status(401).json({
            message: "Not authorized, invalid token.",
        })
     }
   }
   else {
      return res.status(401).json({
         message: "Not authorized, no token found",
     })
   }

}