import { defineConfig } from "tsdown";
import metadata from "./package.json" with { type: "json" };

const { name, version } = metadata;

export default defineConfig({
	name,
	tsconfig: "tsconfig.build.json",
	shims: true,
	dts: true,
	platform: "node",
	entry: {
		index: "lib/main.ts",
	},
	format: ["cjs", "esm"],
	env: {
		__NAME__: name,
		__VERSION__: version,
	},
});
