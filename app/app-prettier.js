#! /usr/bin/env -S deno -A
import { async_prettier } from "../npm-module/esm/mod.js";

var js = `function add2 (a,b){return a+b}`;
console.log(`[[${await async_prettier(js)}]]`);
