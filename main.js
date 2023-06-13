const express = require("express");
// mvc
const server = express();
server.use(express.static("public")); // serve static files
// routes
server.get("/", (req, res) => {
  // business logic
  res.render("home.ejs", { user: { isKenyan: false, name: "ALbert" } });
});
server.get("/about", (req, res) => {
  // business logic
  res.render("about.ejs");
});
server.get("/contact", (req, res) => {
  // business logic
  res.render("contact.ejs");
});
server.all("*", (req, res) => {
  res.status(404).render("404.ejs");
});

// start the app using listen method
server.listen(3003);
