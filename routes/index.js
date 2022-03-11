const router = require("express").Router();
// import all of the api routes from /api/index.js (no need for index.js thought as it is already implied)
const apiRoutes = require("./api");
const htmlRoutes = require("./html/html-routes");

// add prefix of `/api` to all of the apo routes imported from the `api` directory
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
