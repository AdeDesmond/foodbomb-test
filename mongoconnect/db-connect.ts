import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("db connected");
    });
    connection.on("error", (err) => {
      console.log(err.message);
      process.exit();
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("Something went wrong with the connection");
    }
  }
};
