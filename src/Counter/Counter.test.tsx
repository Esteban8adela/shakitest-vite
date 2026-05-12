import Counter from "./Counter";
import {describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { setUpUserEvent } from "./setUpUserEvent";



describe("Counter ", () => {
    test("It should render the component", () => { 
        render(<Counter />);
        const currentCount = screen.getByTestId('Counter-Value');
        screen.debug(currentCount);
        expect(currentCount.innerHTML).toBe("0");
    });

    test("It should render the component with jest-dom assertions", () => {
        render(<Counter />);
        const currentCount: HTMLElement = screen.getByTestId("Counter-Value");
        expect(currentCount).toHaveTextContent("0");
        expect(currentCount.textContent).toBe("0");
    });

        test("It should increment when the increment button is pressed", () => {
        render(<Counter />);
        // Get the HTML elements
        const currentCount: HTMLElement = screen.getByTestId("Counter-Value");
        const incrementButton: HTMLElement = screen.getByRole("button", { name: "Increment" });
        // Assertions and actions
        expect(currentCount).toHaveTextContent("0");
        fireEvent.click(incrementButton);
        expect(currentCount).toHaveTextContent("1");
    });

    test("It should reset count after incrementing the count", async() => {
        const { user } = setUpUserEvent(<Counter />);
        // Get the HTML elements
        const currentCount: HTMLElement = screen.getByTestId("Counter-Value");
        const incrementButton: HTMLElement = screen.getByRole("button", { name: "Increment" });
        const resetButton: HTMLElement = screen.getByRole("button", { name: "Reset" });
        // Assertions and actions
        expect(currentCount).toHaveTextContent("0");
        await user.click(incrementButton);
        expect(currentCount).toHaveTextContent("1");
        await user.click(resetButton);
        expect(currentCount).toHaveTextContent("0");
    });

    test("It should start with a count of 2 and then reset", () => {
        render(<Counter initialCount={2} />);
        // Get the HTML elements
        const currentCount: HTMLElement = screen.getByTestId("Counter-Value");
        const resetButton: HTMLElement = screen.getByRole("button", { name: "Reset" });
        // Assertions and actions
        expect(currentCount).toHaveTextContent("2");
        fireEvent.click(resetButton);
        expect(currentCount).toHaveTextContent("0");
    });

    test("It should start with a count of 2 and then reset", async () => {
    const { user } = setUpUserEvent(<Counter initialCount={2} />);
    
    const currentCount = screen.getByTestId("Counter-Value");
    const resetButton = screen.getByRole("button", { name: "Reset" });
    expect(currentCount).toHaveTextContent("2");
    await user.click(resetButton);
    expect(currentCount).toHaveTextContent("0");
});
});
