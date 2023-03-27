export const renderProfile = (req, res) => {
  res.render("profile.ejs", { user: req.user });
};
