const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const morgan = require("morgan");

const app = express();
//USING ENVIRONMENT VARIABLES
dotenv.config();

//CONNECTING TO DATABASE
dbConnect();

//MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));

//ROUTES
app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Invoicing and payment reminder API");
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`server started on: ${port}`);
});
