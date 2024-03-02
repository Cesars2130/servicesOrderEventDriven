import express from "express";
import { Signale } from "signale";
import dotenv from 'dotenv';
import cors  from 'cors';


dotenv.config()


import { loadRouter } from "./event/LoadRouter";
import { serviceEstacionRouter } from "./service/infrastructure/ServiceRouter";



const app = express();
app.use(cors());



const signale = new Signale();

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use("/service", serviceEstacionRouter);
app.use("/load", loadRouter);

app.listen(SERVER_PORT, () => {
  signale.success("Server online in port 3000");
});
