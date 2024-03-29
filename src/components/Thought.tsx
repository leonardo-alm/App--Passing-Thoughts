import { useEffect } from 'react';
import { IThoughtProps } from '../interfaces/IThoughtProps';

export function Thought(props: IThoughtProps) {
    const { thought, removeThought } = props;

    if (!thought.text.trim()) {
        throw Error("No thoughts?")
    }

    useEffect(() => {
        const timeRemaining = thought.expiresAt - Date.now();
        const timeout = setTimeout(() => {
            removeThought(thought.id)
        }, timeRemaining)
        return () => {
            clearTimeout(timeout);
        }
    }, [thought])

    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

    return (
        <li className="Thought">
            <div className="text">{thought.text}</div>
            <button
                aria-label="Remove thought"
                className="remove-button"
                onClick={handleRemoveClick}
            >
                &times;
            </button>
        </li>
    );
}
