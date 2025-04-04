const express = require("express");
const app = express();
const path = require("path")

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const newRouter = require("./routes/newRouter");
const {indexRouter} = require("./routes/indexRouter");

app.use("/", indexRouter);
app.use("/new", newRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}`)
});
