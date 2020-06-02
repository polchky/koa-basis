const CombineRouters = require('koa-combine-routers');

const auth = require('@routes/auth');
const users = require('@routes/users');

const router = CombineRouters([
    auth,
    users,
]);

module.exports = router;
