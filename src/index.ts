import app from "./app";
import log from "./Utils/logger";
import {PORT} from "./Config/index"

const port = PORT || 5000;

app.listen(port, () => {
  log.info(`Server is running on http://localhost:${port}`);
});
