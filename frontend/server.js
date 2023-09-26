//simple express server to run frontend production build;
require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const { logger } = require("./src/utils/logger");
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(process.env.PORT, async () => {
  logger.info(`Server started on port: ${process.env.PORT}`);
});

