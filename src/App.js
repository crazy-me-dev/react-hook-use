import React, { useState } from 'react';

export default function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <>
      {techs.length > 0 && (
        <ul>
          {techs.map(tec => (
            <li key={tec}> {tec} </li>
          ))}
        </ul>
      )}
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAddTech}>
        Adicionar
      </button>
    </>
  );
}
