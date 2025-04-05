const { Router } = require("express");
const indexRouter = Router();
const {messagesTitle, renderMessages} = require("../controller/indexController")

indexRouter.get("/", messagesTitle);

indexRouter.get("/messages/:id", renderMessages);

// indexRouter.get("/:indexId", (req, res) => {
//     const {indexId} = req.params;
//     res.send(`Index Id: ${indexId}`);
// });

module.exports = {indexRouter};



