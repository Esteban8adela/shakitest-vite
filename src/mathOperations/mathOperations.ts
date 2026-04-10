export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

interface ISubstractProps {
  a: number;
  b: number;
}

export function subtract2(props: ISubstractProps): number {
    const { a, b } = props;
    return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  return a / b;
}