import { getWorkspace } from "utils/src/index";
import { Router } from "express";

const rootRouter = Router();

rootRouter.get("/", (req, res) => {
  const workspace = getWorkspace();
  res.header("s-maxage", "0").json(workspace);
});

export default rootRouter;
