import express from "express";
import cors from "cors";
import BookRoute from "./routes/BookRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(BookRoute);

app.listen(5000, ()=> console.log('Server Berjalan!'));