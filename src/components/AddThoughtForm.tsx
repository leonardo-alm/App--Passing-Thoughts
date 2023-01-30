import React, { useState } from 'react';
import { IThought } from '../App';
import { generateId, getNewExpirationTime } from '../functions/utilities';

interface IAddThoughtFormProps {
  addThought: (thougth: IThought) => void
}

export function AddThoughtForm(props: IAddThoughtFormProps) {
  const [text, setText] = useState('')

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

    if (text.length > 0) {
      props.addThought(thought)
    }

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
