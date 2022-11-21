'use strict'
function generateKey() {
    const characters = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
    const length = 16;
    let key = "" ;
    for(let i = 0; i <= length; i++) {
        const randomPassword = Math.floor(Math.random() * characters.length);
        key += characters[randomPassword];
    }
    return key;
}
console.log(generateKey())
