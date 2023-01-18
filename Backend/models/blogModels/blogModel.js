import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    Author: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    ImageUrl: {
      type: String,
      required: true,
    },
    Catagories: {
      type: [String],
    },
    Likes: {
      type: [
        {
          User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
          },
        },
        { timestamps: true },
      ],
    },
    Comments: {
      type: [
        {
          User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
          },
        },
        { timestamps: true },
      ],
    },
  },
  { timestamps: true }
);

export const BlogPosts = mongoose.model("BlogPosts", blogSchema);
