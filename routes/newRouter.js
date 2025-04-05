const {Router} = require("express");
const {render, pushMessage} = require("../controller/newController")

const newRouter = Router();


newRouter.get("/", render);
newRouter.post("/", pushMessage)
// newRouter.get("/:newId", (req, res) => {
//     const {newId} = req.params;
//     res.send(`New ID: ${newId}`)
// })

module.exports = newRouter;