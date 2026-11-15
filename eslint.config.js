import { defineConfig } from "@diba1013/linter/eslint";

export default defineConfig({
	platform: "node",
	typescript: "./tsconfig.json",
	configs: [
		{
			files: ["*.config.{js,ts}"],
			rules: {
				// Bundler and test configs must call defineConfig at the top level to take effect.
				"unicorn/no-top-level-side-effects": "off",
				// Config packages expose loosely typed helpers; the calls are deliberate and bounded.
				"@typescript-eslint/no-unsafe-call": "off",
			},
		},
		{
			files: ["lib/main.ts"],
			rules: {
				// Published CLI entry keeps a shebang while still exporting the library API.
				"unicorn/no-exports-in-scripts": "off",
			},
		},
		{
			files: ["test/**/*.ts"],
			rules: {
				// Vitest matchers are typed as any, so assigning their results triggers false positives.
				"@typescript-eslint/no-unsafe-assignment": "off",
			},
		},
	],
});
