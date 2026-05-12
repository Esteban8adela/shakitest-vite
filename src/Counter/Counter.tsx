import { useState } from "react";
type CounterProps = { initialCount?: number };
import { Buttons } from "./Buttons";
import { getNumber } from "../mocks/mocks";

const dataTestId: string = "Counter";
const Counter = ({ initialCount = 0 }: CounterProps) => {
    const [counter, setCounter] = useState<number>(initialCount);
    const temp = getNumber();
    return (
        <div>
            <header>
                <h1 data-testid={`${dataTestId}-Header`}>
                    Esteban, this is a header
                </h1>
                <h1 data-testid={`${dataTestId}-Header2`}>Esteban, this is a counter component</h1>
            </header>
            <div data-testid={`${dataTestId}-Value`}>{counter}</div>
            <Buttons dataTestId={dataTestId} setCounter={setCounter} />
        </div>
    );
};
export default Counter;
