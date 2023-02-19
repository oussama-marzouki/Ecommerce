import mongoose from "mongoose";
//process.env.MONGO_URI
const connectDB = async () => {
  const conn = await mongoose.connect('mongodb://localhost:27017', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
