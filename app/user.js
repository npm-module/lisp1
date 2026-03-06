#! /usr/bin/env -S deno -A
import transformed from "./transformed.js";

var scope=transformed(globalThis);
