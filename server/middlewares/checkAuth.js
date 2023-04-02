import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) =>{
   const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");  // вытаскиваем токен из хедера запроса и записываем его в const без слова bearer

   if(token){
      try{
         const decoded = jwt.verify(token, process.env.JWT_SECRET);              // если токен есть, его декодируем и сохраняем в userId
         req.userId = decoded.id;
         next()
      }
      catch(err){
        return res.status(400).json({
            message: "Нет доступа"
         })
      }
   }
   else {
      return res.status(400).json({
         message: "Нет доступа"
      })
   }

}