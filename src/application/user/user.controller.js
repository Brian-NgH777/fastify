const userBusinesses = require('./user.businesses');

module.exports = async function (fastify) {
    fastify.route({
        method: 'GET',
        url: '/user',
        schema: {
            querystring: {
              name: { type: 'string' },
              excitement: { type: 'integer' }
            },
            response: {
              200: {
                type: 'object',
                properties: {
                  hello: { type: 'string' }
                }
              }
            }
        },
        preHandler: [],
        handler: async (req, reply) => { 
            return userBusinesses.findUsers(req);
        }
    })
}