const express = require('express');

const {Router} = express;
const router = new Router();

const user = require('./user');
const vpnOps = require('./vpnOps');
const session = require('./session');

router.use('/api/users', user);
router.use('/api/connect', vpnOps);
router.use('/api/sessions', session);

module.exports = router;
