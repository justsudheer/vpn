const { execSync } = require('child_process')

// initialize the WireGuard CLI according to the database
function init() {

    // clear WireGuard CLI configurations, your wg0.conf should only contain the interface and no peers (unless you have default ones for access control)
    execSync('systemctl restart wg-quick@wg0')

}

module.exports = init