import { getDatabase } from "./db.ts";
import { Router } from "./deps.ts";

const routes = Router();

routes.get("/", (req, res) => {
  res.setStatus(200).json({
    success: "true",
    data: getDatabase(),
  });
});

export default routes;
