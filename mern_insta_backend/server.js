import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Pusher from "pusher";

//app config
const app = express();
const port = process.env.PORT || 8080;

//middlewares
app.use(express.json());
app.use(cors());

//DB config
const connection_url =
  "mongodb+srv://Nishant_Rout:h3JAgQV4JRginWtt@cluster0.7zzms.mongodb.net/instaDB?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Connected To DB");
});

//api routes
app.get("/", (req, res) => res.status(200).send("Hello World!!"));

//listen
app.listen(port, () => console.log(`Listening on localhost ${port}`));
