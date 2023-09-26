const pino = require("pino");
const pretty = require('pino-pretty');

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      levelFirst: true,
      translateTime: true,
      colorize: true,
    }
  }
});

exports.logger = logger;
