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
          console.log("req.mongoose.modelsreq.mongoose.modelsreq.mongoose.models", fastify.mongoose.models);
          const { User } = req.mongoose.models;
          let dataReturned = await User.findOne({
            "username": 'transybao3'
          }).select('username');
          return dataReturned;
            // return userBusinesses.findUsers(req);
        }
    })
}