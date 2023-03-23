import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../functions/utilities';
import { IAddThoughtFormProps } from '../interfaces/IAddThoughtFormProps';

export function AddThoughtForm(props: IAddThoughtFormProps) {
  const { addThought } = props
  const [text, setText] = useState<string>('')

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setText(target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };
    
    addThought(thought)
    setText('')
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input value={text} onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <button>Add your thought</button>
    </form>
  );
}
