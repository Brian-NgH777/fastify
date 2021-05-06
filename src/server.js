const fastify = require('fastify')({ logger: true });
require('dotenv').config();
const {
    mongooseConnect
} = require('./db/connect');
const system = require('./system');
const router = require('./router');

fastify.setErrorHandler(function (error, request, reply) {
    reply.status(error.statusCode).send({ message: error.message })
})

//- init mongoose
let mongoose = mongooseConnect();
//- add to fastify decorator
fastify.decorate('mongoose', mongoose);

fastify.register(system)
fastify.register(router)


fastify.listen(process.env.PORT, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
})