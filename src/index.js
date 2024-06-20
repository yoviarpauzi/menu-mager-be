import app from "./application/web.js";
import logger from "./application/logger.js"

app.listen(3001,() => {
    logger.info(("Server running on port 3001"));
})

export default app;