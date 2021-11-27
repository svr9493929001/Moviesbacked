const os = require("os");
console.log("The free memory", Math.round( os.freemem()/1000000000, 2), "Gb");
console.log("The total memory", (os.totalmem() / 1000000000).toFixed(2), "Gb");
console.log("The version", os.version());