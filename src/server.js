'use strict'
const fastify = require('fastify')({ logger: true });
require('dotenv').config();
const {
    mongooseConnect
    // sequelizeConnect
} = require('./db/connect');
const system = require('./system');
const router = require('./router');

if (process.env.DB_ENGINE === "mongo") {
    let mongoose = mongooseConnect();
    fastify.decorate('mongoose', mongoose);
}

// if (process.env.DB_ENGINE === "postgres") {
//     let sequelizeC = sequelizeConnect()
//     fastify.decorateRequest('pg', sequelizeC);
//     sequelizeC.sequelize.sync();
// }

fastify.setErrorHandler(function (error, request, reply) {
    reply.status(error.statusCode).send({ message: error.message })
})

fastify.register(system)
fastify.register(router)


fastify.listen(process.env.PORT, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
})