import { useState } from "react";
type CounterProps = { initialCount?: number };

const Counter = ({ initialCount = 0 }: CounterProps) => {
    const dataTestId: string = "Counter";
    const [counter, setCounter] = useState<number>(initialCount);

    return (
        <div>
            <header>
                <h1 data-testid={`${dataTestId}-Header`}>Esteban, this is a header</h1>
            </header>
            <div data-testid={`${dataTestId}-Value`}>{counter}</div>
            <button
                name="reset"
                data-testid={`${dataTestId}-ResetBtn`}
                onClick={() => setCounter(0)}
            >
                Reset
            </button>

            <button
                name="Increment"
                data-testid={`${dataTestId}-IncrementBtn`}
                onClick={() => setCounter((n) => n + 1)}
            >
                Increment
            </button>
        </div>
    );
};

export default Counter;
