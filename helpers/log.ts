import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "warning.log", level: "warning" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  winston.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

const logInfo = (message) => logger.log("info", message);
const logError = (message) => logger.log("error", message);
const logWarning = (message) => logger.log("warning", message);

export { logInfo, logError, logWarning };
