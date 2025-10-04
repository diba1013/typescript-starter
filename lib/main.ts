#!/usr/bin/env node

import path from "node:path";

console.log({
	name: process.env.__NAME__,
	version: process.env.__VERSION__,
	path: path.dirname(process.cwd()),
});
