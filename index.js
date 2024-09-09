const express = require("express");
const cors = require("cors")
const app = express();
const userLogin = require('./controllers/user/userLogin.js')
const authentication = require('./middleware/auth.js')
const port = 3010;
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
/* Error handler middleware */

// app.use(authentication)
app.use("/userLogin", userLogin);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});