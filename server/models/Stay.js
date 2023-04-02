import mongoose from "mongoose";

const StaySchema = new mongoose.Schema({
   title: {
      type: String,
      require: true,
   },
   category: {
      type: String,
      require: true,
   },
   direction: {
      type: String,
      require: true,
   },
   price: {
      type: String,
      require: true,
   },
   area: {
      type: String,
      require: true,
   },
   descriptionShort:{
      type: String,
      require: true,
   },
   descriptionLong: {
      type: String,
      require: true,
   },
   image: {
      type: String,
      require: true,
   }
})

export default mongoose.model("Stay", StaySchema)