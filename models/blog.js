const mongoose = require("mongoose");
const { Schema } = mongoose;

// create Schema
const blogSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    snippet: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// create a model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
