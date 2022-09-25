const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

// express app
const app = express();

// connect to MongoDB

mongoose
  .connect(process.env.DB_CONN)
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));

// register view engine  -- defaule folder is views | if i want other folder must set it
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

// 404 pages
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
