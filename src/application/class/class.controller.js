const classBusinesses = require('./class.businesses');
const routerMiddleware = require('../../middlewares');

module.exports = async function (fastify) {
    fastify.route({
        method: 'GET',
        url: '/class',
        schema: {},
        // preHandler: routerMiddleware,
        handler: async (req, reply) => { 
            return await classBusinesses.findClasses(req);
        }
    })
    fastify.route({
        method: 'GET',
        url: '/class/create',
        schema: {},
        preHandler: [],
        handler: async (req, reply) => { 
            return classBusinesses.createClass(req);
        }
    })
}