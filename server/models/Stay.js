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
      type: Number,
      require: true,
   },
   area: {
      type: Number,
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
   imgUrl: {
      type: [String],
      default: undefined,
   }
})



export default mongoose.model("Stay", StaySchema)