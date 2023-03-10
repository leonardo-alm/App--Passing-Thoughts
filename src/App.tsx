import { useState } from 'react';
import { AddThoughtForm } from './components/AddThoughtForm';
import { Thought } from './components/Thought';
import { generateId, getNewExpirationTime } from './functions/utilities';
import { IThought } from './interfaces/IThought';

export function App() {
  const [thoughts, setThoughts] = useState<IThought[]>([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 5 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought: IThought) => {
    setThoughts((prev) => {
      return [thought, ...prev]
    })
  }

  const removeThought = (thoughtIdToRemove: number) => {
    setThoughts((prev) => prev.filter((thought) => thought.id != thoughtIdToRemove)
    )
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

