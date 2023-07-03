import express from 'express'
import { routes } from './routes';

function startHttpServer() {

  const server = express()

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(routes)

  server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
  });
}

export { startHttpServer }