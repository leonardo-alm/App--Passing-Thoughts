import { IThought } from "./IThought";

export interface IThoughtProps {
    removeThought: (thoughtIdToRemove: number) => void;
    thought: IThought
}
