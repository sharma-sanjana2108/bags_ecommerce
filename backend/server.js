const express = require("express");
const connectDB = require("./config/db_config");
const router = require("./routes/bagRoutes");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorhandler");
const cors = require("cors");
const path = require('path')

const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

connectDB();

if(process.env.NODE_ENV === "production"){
  app.use(cors())
} else {
  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["get", "post"],
      credentials: true,
    })
  );
}

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/api/products", router);
app.use(errorHandler);

app.use(express.static(path.join(__dirname, "../frontend/dist")))
app.get("*", (req, res) => {
  res.sendFile(express.static(path.join(__dirname, "../frontend/dist")))
})

app.listen(PORT, () => {
  console.log(`Server is running at : ${PORT}`);
});
