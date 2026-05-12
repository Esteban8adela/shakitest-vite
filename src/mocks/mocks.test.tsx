import { render } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import Counter from "../Counter/Counter";
import { getNumber, cart, messages } from "./mocks";

describe("testing mocks", () => {
  test("getNumber should have been called", () => {
    const getNumber = vi.fn(() => 5000);
    // const getNumber = vi.fn()
    // const getNumber = vi.fn(() => undefined)
    const number = getNumber();
    expect(number).toBe(5000);
    expect(getNumber).toHaveBeenCalled();
    expect(getNumber).toHaveReturnedWith(5000);
  });

  test("Should spy on getApples", () => {
    const spy = vi.spyOn(cart, "getApples");
    const apples = cart.getApples();
    expect(spy).toHaveBeenCalled();
    expect(apples).toBe(42);
  });

  test("Should spy on getApples and mock implementation", () => {
    const spy = vi.spyOn(cart, "getApples").mockImplementation(() => 1);
    const apples = cart.getApples();
    expect(spy).toHaveBeenCalled();
    expect(apples).toBe(1);
  });

  test("Should get the latest message with a spy", () => {
    const spy = vi.spyOn(messages, "getLatest");
    expect(spy.getMockName()).toEqual("getLatest");
    expect(messages.getLatest()).toEqual(
      messages.items[messages.items.length - 1],
    );
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test.skip("passing down the mock", () => {
    const callback = vi.fn();
    messages.onItem(callback);
    messages.addItem({ message: "Message 3", from: "Ana" });
    expect(callback).toHaveBeenCalledWith({
      message: "Message 3",
      from: "Ana",
    });
  });
});