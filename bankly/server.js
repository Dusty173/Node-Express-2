/** Server for bank.ly. */


const app = require("./app");
console.log()
app.listen(3000, () => {
  console.log(`Server starting on port 3000`);
});
