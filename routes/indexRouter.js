const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        open: "/:messages[]"
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        open: "test"
    }
]


indexRouter.get("/", (req,res) => res.render("index", {title: "Mini Messageboard", messages: messages}));

indexRouter.get("/messages/:id", (req, res) => {
    const { id } = req.params;
    const message = messages[id];
  
    res.render("messages", { title: "Message Detail", message });
  });

// indexRouter.get("/:indexId", (req, res) => {
//     const {indexId} = req.params;
//     res.send(`Index Id: ${indexId}`);
// });

module.exports = {indexRouter, messages};



