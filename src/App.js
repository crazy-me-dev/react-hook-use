import React, { useState, useEffect, useMemo } from 'react';

export default function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('techs');

    if (storageTech) {
      setTechs(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      {techSize > 0 && (
        <>
          <ul>
            {techs.map(tec => (
              <li key={tec}> {tec} </li>
            ))}
          </ul>
          <br />
          <strong>{techSize} tecnologias adicionadas.</strong>
          <br />
        </>
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
