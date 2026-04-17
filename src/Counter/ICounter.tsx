export type CounterProps = {
    initialCount?: number; 
};
export interface IButtonsProps {
    dataTestId: string;
    setCounter: React.Dispatch<React.SetStateAction<number>> //(value: number) => void;
}