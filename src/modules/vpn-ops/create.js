const { execSync } = require("child_process");
const { Client } = require("ssh2");

async function create() {


  return JSON.parse(await execSync(`./add.sh 0.0.0.0`));
}

module.exports = create;


//   const { readFileSync } = require("fs");

//   const { Client } = require("ssh2");

//   const conn = new Client();
//   return new Promise((resolve, reject) => {
//     conn
//       .on("ready", () => {
//         console.log("Client :: ready");
//         conn.exec("ls -a", (err, stream) => {
//           if (err) throw err;
//           stream
//             .on("close", (code, signal) => {
//               console.log(
//                 "Stream :: close :: code: " + code + ", signal: " + signal
//               );
//               conn.end();
//               reject("something went wroing");
//             })
//             .on("data", (data) => {
//               console.log("STDOUT: " + data);
//               resolve(data);
//             })
//             .stderr.on("data", (data) => {
//               console.log("STDERR: " + data);
//               reject(data);
//             });
//         });
//       })
//       .connect({
//         host: "104.198.128.237",
//         port: 22,
//         user: 'sudheer',
//         privateKey: readFileSync('/Users/sudheersingh/.ssh/id_rsa')
//       });
//   });
