import app from "./application/web.js";
import logger from "./application/logger.js"

app.listen(9000,() => {
    logger.info(("Server running on port 9000"));
})

export default app;