const express = require("express");
const connectDB = require("./config/db_config");
const router = require("./routes/bagRoutes");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorhandler");
const cors = require("cors");

const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["get", "post"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/api/products", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at : ${PORT}`);
});
