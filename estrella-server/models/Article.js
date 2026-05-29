const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
{
  slug: {
    type: String,
    required: true,
    unique: true,
  },

  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    default: "",
  },

  paragraphs: {
    type: Number,
    default: 0,
  },

  preview: {
    type: String,
  },

  status: {
    type: String,
    enum: ["Active", "Disabled"],
    default: "Active",
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);