'use strict'
const ip = "10.0.0.1";
function ipToInt() {
    const fn = (el, ip) => (el << 8) + parseInt(ip);
    return ip.split(".").reduce(fn, 0);
}
console.log(ipToInt());
//167772161
