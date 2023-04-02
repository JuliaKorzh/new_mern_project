import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email:{
         type: String,
         required: true,
         unique: true,
      },
      phonenumber: {
         type: Number,
         required: true,
      },
      password: {
         type: String,
         requred: true,
      },
   },
   {
      timestamps: true,
   },
)

export default mongoose.model("User", UserSchema)