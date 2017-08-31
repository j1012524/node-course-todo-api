const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = "$2a$10$JdnfMiRY/bISOr6VCa9J..brLIyznyQ9QmVRf75IXpeHiUDKNeXVO";

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
// var data = {
//   id:10
// };
//
// var token = jwt.sign(data, 'abc123');
// console.log(`token ${token}`);
//
// var decode = jwt.verify(token, 'abc123');
// console.log(JSON.stringify(decode));


// var message = "I am user number 3";
// var hash = SHA256(message).toString();
//
// console.log(`Message ${message}`);
// console.log(`hash ${hash}`);
//
// var data = {
//   id:4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.data.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(token.hash === resultHash) {
//   console.log('Valid Data and User data was not changed');
// }
// else {
//   console.log(' data was changed dont trust ');
// }
