const {messages} = require("../db");

const asyncHandler = require("express-async-handler")

const messagesTitle = asyncHandler(async (req,res) => res.render("index", {title: "Mini Messageboard", messages: messages}));

const renderMessages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const message = messages[id];
  
    res.render("messages", { title: "Message Detail", message });
  });

module.exports = {messagesTitle, renderMessages}


