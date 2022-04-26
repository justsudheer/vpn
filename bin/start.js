const Server = require('../server');
const initWiregurad = require('./init');

initWiregurad().then(console.log('WireGuard initialized'))
Server.start(3000);
