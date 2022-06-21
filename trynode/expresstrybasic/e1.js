const express = require("express");
const app = express();
const router = express.Router();
app.use("/blog", router);
const PORT = 3000;
const blogs = [
  {
    id: 1,
    title: "Food",
    content: "content",
  },
  {
    id: 2,
    title: "Food",
    content: "content",
  },
];
router.get("/", (req, res) => {
  res.json(blogs);
});
router.get("/:id", (req, res) => {
  // console.log(req.params.id)
  res.json(blogs.filter((blog) => blog.id === Number(req.params.id)));
});
router.post("/blog", (req, res) => {
  res.send("post");
});
router.put("/blog", (req, res) => {
  res.send("put");
});
router.delete("/", (req, res) => {
  // res.send('delete')
  res.sendStatus(204);
});
router.listen(PORT, () => {
  console.log(`running o PORT: ${PORT}`);
});