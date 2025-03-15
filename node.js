import { fastify } from 'fastify';
import { databaseMemory } from './api/databaseMemory.js';
import cors from '@fastify/cors';

const server = fastify()
const database = new databaseMemory()

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

server.listen({ port: 3000, host: '69.62.65.74' }, () => {
  console.log('Servidor rodando na porta 3000');
});
