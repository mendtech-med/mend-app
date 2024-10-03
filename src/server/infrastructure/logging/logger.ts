// src/infrastructure/logging/logger.ts
import { createLogger, format, transports } from "winston";
import envConfig from "../../config/env";

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
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  ],
});

// if (envConfig.nodeEnv !== "production") {
//   logger.add(
//     new transports.Console({
//       format: format.combine(format.colorize(), format.simple()),
//     })
//   );
// }

export default logger;
