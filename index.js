const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

server.listen(3000, () => {
    console.log("server is listening on port 3000");
});
