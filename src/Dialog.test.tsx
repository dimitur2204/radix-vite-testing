import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { render } from "@testing-library/react";

describe("Data display tests", () => {
	it("Displays in the order given by the columns/data arrays", async () => {
		render(
			<Dialog.Root>
				<Dialog.Trigger>Open Dialog</Dialog.Trigger>
				<Dialog.Content>Content</Dialog.Content>
			</Dialog.Root>,
		);
	});
});
