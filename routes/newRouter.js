const {Router} = require("express");
const {messages} = require("./indexRouter")

const newRouter = Router();


newRouter.get("/", (req, res) => res.render("form"));
newRouter.post("/", (req, res) => {
    const {author} = req.body;
    const {message} = req.body;
    messages.push({ text: message, user: author, added: new Date() });
    res.redirect("/");
})
// newRouter.get("/:newId", (req, res) => {
//     const {newId} = req.params;
//     res.send(`New ID: ${newId}`)
// })

module.exports = newRouter;