import { expect, it } from "vitest";
import { prepare } from "~/main.ts";

it("main should properly resolve environment and esm syntax in module scope", () => {
	const cut = prepare();

	expect(cut.name).to.eq("typescript-starter");
	expect(cut.version).to.eq("1.0.0");
	expect(cut.path).to.contain("lib");
});
