import { fastify } from 'fastify';
import { databaseMemory } from './api/databaseMemory.js';
import cors from '@fastify/cors';
import fs from 'fs';

const server = fastify()
const database = new databaseMemory()

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/sinaicafe.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/sinaicafe.com/fullchain.pem')
};

server.register(cors, {
  origin: '*', // Permite todas as origens (modifique conforme necessário)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
});

server.get("/", (req, res) => {
  return database.list()
});


server.post("/", (req, res) =>{
    const bebida = req.body
    bebida.id += 1
    console.log(bebida)

    database.create({
        coffee: bebida.cafe,
        milk: bebida.leite,
        additionals: bebida.adicional,
        name: bebida.nome,
        status: bebida.status
    })
    
    return res.status(201).send()
})

server.patch("/", async (req, res) => {
  const id = req.body.id
  database.patch(id)

  res.status(201).send()
})

server.listen(3000, { https: options }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor HTTPS rodando em ${address}`);
});
