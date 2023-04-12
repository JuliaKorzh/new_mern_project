import {body} from "express-validator";

export const registerValidator = [
   body("name", "this feld is required").isLength({ min: 3}),
   body("email", "email is not correct").isEmail(),
   body("phonenumber", "Phonenumber is not correct").isLength({ min:12, max:12 }),
   body("password", " Password must have at least 8 characters").isLength({ min: 8}),
]