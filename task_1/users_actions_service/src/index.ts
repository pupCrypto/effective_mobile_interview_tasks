import express, { Express, Request, Response } from "express";
import CONFIG from './config';
import router from "./routers";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use('/api', router);

app.listen(<number>CONFIG.PORT, CONFIG.HOST, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
