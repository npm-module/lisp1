#! /usr/bin/env -S deno -A
import { async_transformCode, system } from "../npm-module/esm/mod.js";

var lispCode = `
(console.log 123)
#|@
var xyz = "XYZ";
console.log(<string>xyz={{xyz}}<string>)
|#
`;
var jsCode = await async_transformCode(lispCode);
//console.log(jsCode);
system.saveText("transformed.js", jsCode);
await system.async_run(["cat", "./transformed.js"]);
