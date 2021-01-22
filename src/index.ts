import express, { urlencoded } from "express";
import cors from "cors";

// import routers
import { ussdRouter } from "./routers/ussd";

// init
const app = express();

// apply middleware
app.use(cors()); // cross-origin resource sharing
app.use(urlencoded({ extended: true })); // url body parser

// route handlers
app.use("/ussd", ussdRouter);

// the port
const port = 8000;

// start listening
app.listen(port, () => {
  console.log(`server started on port, ${port}`);
});
