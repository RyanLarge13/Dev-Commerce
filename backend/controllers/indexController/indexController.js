import { BlogPosts, Testimonials } from "../../models/index.js";

export const renderIndex = async (req, res) => {
  const { testimonials, blogs } = await getData();
  res.status(200).render("index", {
    blogPosts: blogs,
    testimonials: testimonials,
  });
};

const getData = async () => {
  const top3BlogPosts = await BlogPosts.find({})
    .sort({ date: "desc" })
    .limit(3);
  const top3Testimonials = await Testimonials.find({})
    .sort({ date: "desc" })
    .limit(3);

  const data = { tests: top3Testimonials, blogs: top3BlogPosts };
  return data;
};
