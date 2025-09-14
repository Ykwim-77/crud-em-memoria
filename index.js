import express from "express";
import cors from "cors";
import roteador from "./routes/users-router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', roteador);
app.listen(3000);