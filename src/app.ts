import express, { json } from "express";
import router from "./routes/indexRouter";

const app = express();

app.use(json());
app.use(router);
app.listen(5000, () => console.log('servidor rodando na porta 5000'))
