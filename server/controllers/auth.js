import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";




//__Registration user

export const register = async (req, res)=>{

   try{
      const errors = validationResult(req);                             // проверяем есть ли ошибкт при введении данных
      if(!errors.isEmpty()){                                              // если errors, не пустая коллекция
        return res.status(400).json(
         errors.array()
        )
      }

      const {name, email, phonenumber, password} = req.body            //то, что пользователь отправляет на сервер

      const isUsed = await User.findOne({email})                      // проверяем, есть ли в бд пользователь с таким именем
      if(isUsed){
         return res.status(401).json({
            message: "User with this email address already exists"
         })
      }

      const salt = bcrypt.genSaltSync(10)                                // генерируем соль для хэширования
      const hash = bcrypt.hashSync(password, salt)

      const user = new User({                                          // создаем нового пользователя
         name,
         email,
         phonenumber,
         password: hash,                                                   // вместо пароля вписываем хэш
      })
      const token = jwt.sign(
         {                                                               // токен это зашифрованный id пользователя
         id: user._id,                                                       // нужен, чтобы понять авторизовался пользователь или нет. Если пользователь не в  системе, он не сможет нпр отправить сообщение владельцу
        }, 
        process.env.JWT_SECRET,                                        //секретное слово 
        {expiresIn: "30d"},                                            // сколько времени действителен
     )      

      await user.save()                                               // сохраняем польз в БД

      res.status(200).json({                                                         // возвращаем ответ
         user,
         token,
         message:"Registration completed successfully! You can log in"
      })
   }

   catch(err){
      res.status(500).json({
         message: "Failed to register user"
      })
   }
}


//__LogIn user

export const login = async (req, res)=>{
   try{
      const {email, password} = req.body;                             // достаем имя и пароль из запроса

      const user = await User.findOne({email})                        // проверяем есть ли пользователь с таким именем
      if(!user){
         return res.status(400).json({
            message: "Wrong login or password"
         })
      }

      const isCorrect = await bcrypt.compare(password, user.password)           // проверяем совпадает ли пароль
      if(!isCorrect){
         return res.status(400).json({
            message: "Wrong login or password"
         })
      }

      const token = jwt.sign({                // токен это зашифрованный id пользователя
          id: user._id,                      // нужен, чтобы понять авторизовался пользователь или нет. Если пользователь не в  системе, он не сможет нпр отправить сообщение владельцу
         }, 
         process.env.JWT_SECRET,                 //секретное слово 
         {expiresIn: "30d"},                     // сколько времени действителен
      )                
      
      res.json(
       {
         token,
         user,
         message: "User successfully logged in"
       }
      )
      
   }
   catch(err){
      res.status(500).json({
         message: "Failed to login"
      })
   }
}


//__Get me user

   export const getMe = async (req, res)=>{
      try{
         const user = await User.findById(req.userId) // userId хранит расшифрованный токен. По нему ищем пользователя
         if(!user){
            return res.status(400).json({
               message: "User not authorized"
            })
         }
         const token = jwt.sign({                // токен это зашифрованный id пользователя
            id: user._id,                                    // нужен, чтобы понять авторизовался пользователь или нет. Если пользователь не в  системе, он не сможет нпр отправить сообщение владельцу
           }, 
           process.env.JWT_SECRET,                 //секретное слово 
           {expiresIn: "30d"},                     // сколько времени действителен
        )
        res.json({
         user,
         token,
        })
      }
      catch(err){
         res.status(400).json({
            message: "User not authorized"
         })
      }
   }
   

   //___________________ChangeData

   export const changeData = async(req, res)=>{
      try {
         const nameNew = req.body.name;
         const emailNew = req.body.email;
         const phonenumberNew= req.body.phonenumber;
         const passwordNew = req.body.password;
         const salt = bcrypt.genSaltSync(10)                                // генерируем соль для хэширования
         const hash = bcrypt.hashSync(passwordNew, salt)

         const user = await User.findByIdAndUpdate(req.userId, {$set: {name: nameNew, phonenumber: phonenumberNew, email: emailNew, password: hash}}, { returnDocument: "after" })
         if(!user){
            return res.status(400).json({
               message: "User not authorized"
            })
         }
         const token = jwt.sign({                // токен это зашифрованный id пользователя
            id: user._id,                                    // нужен, чтобы понять авторизовался пользователь или нет. Если пользователь не в  системе, он не сможет нпр отправить сообщение владельцу
           }, 
           process.env.JWT_SECRET,                 //секретное слово 
           {expiresIn: "30d"},                     // сколько времени действителен
        )
        res.json({
         user,
         token,
        })

      }
      catch(error){
         res.status(401).json({
            message: "Failed to change data"
         })
      }
   }