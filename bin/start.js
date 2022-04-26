const Server = require('../server');
const initWiregurad = require('./init');

setTimeout(() => {
    initWiregurad().then(console.log('WireGuard initialized'))
}, 120000);

Server.start(3000);
