// const userBusinesses = require('./user.businesses');
const userModel = require('../../models/mongo/user');

module.exports = async function (fastify) {
    fastify.route({
        method: 'GET',
        url: '/user',
        schema: {},
        preHandler: [],
        handler: async (req, reply) => {
          console.log("req.mongoose.modelsreq.mongoose.modelsreq.mongoose.models", fastify.mongoose.models);
          // const { User } = req.mongoose.models;
          // let dataReturned = await userModel.findOne({
          //   "username": 'transybao3'
          // }).select('username');
          // return dataReturned;
          return 1;
            // return userBusinesses.findUsers(req);
        }
    })
}