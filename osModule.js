const os = require('os');

// console.log('Platform:', os.platform());
// console.log('Architecture:', os.arch());
// console.log('Release:', os.release());
// console.log('Hostname:', os.hostname());
// console.log('Type:', os.type());
// console.log('Uptime:', os.uptime(), 'seconds');

// console.log('CPUs:', os.cpus());
// console.log('Load average:', os.loadavg());

console.log('Total memory:', os.totalmem()/(1024*1024*10124), 'bytes');
console.log('Free memory:', os.freemem()/(1024*1024*10124), 'bytes');

// console.log('Network interfaces:', os.networkInterfaces());

// console.log('Temporary directory:', os.tmpdir());
