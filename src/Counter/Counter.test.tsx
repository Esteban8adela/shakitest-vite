import Counter from "./Counter";
import {describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Counter ", () => {
    test("It should render the component", () => {
        render(<Counter />);
        const currentCount = screen.getByTestId('Counter-Value');
        screen.debug(currentCount);
        expect(currentCount.innerHTML).toBe("0");
    });
});
