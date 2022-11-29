import { BlogPosts } from "../../models/index.js";

export const renderBlogs = async (req, res) => {
  const top3BlogPosts = await BlogPosts.find({})
    .sort({ date: "desc" })
    .limit(3);
  res.status(200).render("index", {
    blogPosts: top3BlogPosts,
  });
};
