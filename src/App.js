import React, { useState, useEffect, useMemo, useCallback } from 'react';

export default function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState();

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

  const handleAddTech = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  return (
    <>
      {techSize > 0 && (
        <>
          <strong>
            {techSize} tecnologia{techSize > 1 && 's'} adcionadas:
          </strong>
          <ul>
            {techs.map(tec => (
              <li key={tec}> {tec} </li>
            ))}
          </ul>
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
