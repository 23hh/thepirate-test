const express = require("express");
const { sequelize } = require("./models");
const Router = require("./routes");

const app = express();
app.use(express.static("public"));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결됨.");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", Router);

app.listen(3000, () => {
  console.log("http server on 3000");
});

module.exports = app;
