// MODULES - Encapsulated code
// Only share the minimum
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alt-flavor");
require("./7-mine-granade"); // when U import module U invoke it !!
const { john, peter } = names;

sayHi("Greg");
sayHi(john);
sayHi(peter);
