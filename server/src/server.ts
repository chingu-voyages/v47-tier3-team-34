import express ,{Express, Request, Response} from 'express';
const dotenv = require('dotenv');

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("hello Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});