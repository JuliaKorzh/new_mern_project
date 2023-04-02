import {body} from "express-validator";

export const registerValidator = [
   body("name", "Укажите имя пользователя").isLength({ min: 3}),
   body("email", "Неверный формат почты").isEmail(),
   body("phonenumber", "Введите правильный номер телефона").isLength({ min:12, max:12 }),
   body("password", "Пароль должен быть минимум 8 симполов").isLength({ min: 8}),
]