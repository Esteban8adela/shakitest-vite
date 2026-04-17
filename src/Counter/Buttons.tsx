import type { IButtonsProps } from "./ICounter";

export function Buttons({ dataTestId, setCounter }: IButtonsProps) {
    return(
        <div>
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
    )
}