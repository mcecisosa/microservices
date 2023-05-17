const server = require("./src/server");
const { Character, Film, Planet } = require("./src/database");

/* Character.list().then((res) => console.log(res)); */
/* Character.get(1).then((res) => console.log(res)); */

/* Character.insert({
  _id: "200",
  name: "Cecilia Sosa",
  birth_year: "1984",
}).then((res) => console.log(res)); */

/* Film.list().then((res) => console.log(res)); */
/* Film.get(1).then((res) => console.log(res)); */

/* Planet.list().then((res) => console.log(res)); */
/* Planet.get(1).then((res) => console.log(res)); */

server.listen(8004, () => {
  console.log("Database service on PORT 8004");
});
