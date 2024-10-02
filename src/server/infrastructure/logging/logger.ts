// src/infrastructure/logging/logger.ts
import { createLogger, format, transports } from "winston";
import * as dotenv from 'dotenv';
import envConfig from "../../config/env";
dotenv.config();

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  exitOnError: false,
  defaultMeta: { service: "api" },
  transports: [
    new transports.File({ filename: "log/error.log", level: "error" }),
    new transports.File({ filename: "log/combined.log" }),
  ],
});

if (envConfig.nodeEnv !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

export default logger;
