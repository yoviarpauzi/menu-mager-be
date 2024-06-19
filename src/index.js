import app from "./application/web.js";
import logger from "./application/logger.js";

const port = 9000;

app.listen(port, () => {
  logger.info(`Server running with port ${port}`);
});
