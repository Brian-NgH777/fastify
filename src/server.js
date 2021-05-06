const fastify = require('fastify')({ logger: true });
require('dotenv').config();
const {
    mongooseConnect,
    sequelizeConnect
} = require('./db/connect');
const system = require('./system');
const router = require('./router');

fastify.setErrorHandler(function (error, request, reply) {
    reply.status(error.statusCode).send({ message: error.message })
})

switch (process.env.DB_ENGINE) {
    case 'mongo':
        fastify.decorate('mongoose', mongooseConnect());
    case 'postgres':
        sequelizeConnect().sequelize.sync();
        fastify.decorateRequest('pg', sequelizeConnect());
}

fastify.register(system)
fastify.register(router)


fastify.listen(process.env.PORT, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
})