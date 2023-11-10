import mongoose from "mongoose";

const connect = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI as string;
    await mongoose.connect(MONGO_URI);
    console.log("connected");
    
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;