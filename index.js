const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true })); //!er bodole body parser bebohar kora jai

const router = require("./routes/users.route");

app.listen(port, (req, res) => {
  console.log(`connected at port http://localhost:${port}/users`);
});

app.use(router);
