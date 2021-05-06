async function routes (fastify) {
    const v1 = '/api';
    fastify.register(require('../application/user/user.controller'), { prefix: v1 })
    fastify.register(require('../application/class/class.controller'), { prefix: v1 })
}
module.exports = routes;