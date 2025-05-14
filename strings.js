const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function username(name) {
  let user_name = "@" + name.concat(name.length.toString());
  return user_name;
}

rl.question("Enter your name: ", function(name) {
  console.log(username(name));
  rl.close();
});



