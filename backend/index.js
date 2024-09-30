import express from "express";
import dotenv, { parse } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/books.route.js"
import userRoute from "./routes/user.route.js"


const app = express();
app.use(express.json());

app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try{
  mongoose.connect(URI,{});
  console.log("Conected to DB");
}catch(error){
  console.log("Error: ", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.post('/test', (req, res) => {
  console.log("Headers: ", req.headers); // Log request headers
  console.log("Test Route Body: ", req.body); // Log the request body
  res.json({ message: "Success", data: req.body });
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})