const assert = require("assert");
const { isValidICAO, isValidIATA, regionFromICAO, parse } = require("./index");
assert(isValidICAO("KJFK") && !isValidICAO("JFK"));
assert(isValidIATA("JFK") && !isValidIATA("KJFK"));
assert(regionFromICAO("EGLL") === "Northern Europe");
assert(regionFromICAO("WSSS").startsWith("Maritime"));
assert(parse("kjfk").type === "ICAO" && parse("xx").type === "invalid");
console.log("ok — KJFK", regionFromICAO("KJFK"), "| EGLL", regionFromICAO("EGLL"), "| WSSS", regionFromICAO("WSSS"));
