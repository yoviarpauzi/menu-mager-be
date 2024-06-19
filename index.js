import app from "./src/application/web.js";
import logger from "./src/application/logger.js";

const port = 9000;

app.listen(port, () => {
  logger.info(`Server running with port ${port}`);
});
