import express from 'express';
import { criarUsuarioController } from './src/controller/userController';
import { criarLanceController } from './src/controller/lanceController';
import { criarLeilaoController } from './src/controller/leilaoController';
import MainRouter from './src/routes/MainRoutes';

const app = express();
const port = 3000;

app.use(MainRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post('/usuarios', criarUsuarioController);
app.post('/lances', criarLanceController);
app.post('/leiloes', criarLeilaoController);
app.post('/routes', MainRouter);