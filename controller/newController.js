const {messages} = require("../db");

const asyncHandler = require("express-async-handler")

const render = asyncHandler(async (req, res) => res.render("form"))

const pushMessage = asyncHandler(async (req, res) => {
    const {author} = req.body;
    const {message} = req.body;
    messages.push({ text: message, user: author, added: new Date() });
    res.redirect("/");
})

module.exports = {render, pushMessage}