import mongoose from "mongoose";

async function connectDatabase(){
  await mongoose
  .connect(
    "mongodb+srv://admin:WCC7e0v1AEkVxqm3@cluster0.rnuwbqe.mongodb.net/?retryWrites=true&w=majority"
  )
}

export default connectDatabase;
