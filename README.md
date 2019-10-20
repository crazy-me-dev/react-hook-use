# Utilizando React Hooks

## useState
```js
const [techs, setTechs] = useState([]);
```

## useEffect
```js
useEffect(() => {
    const storageTech = localStorage.getItem('techs');

    if (storageTech) {
      setTechs(JSON.parse(storageTech));
    }
  }, []);
```

## useMemo
```js
const techSize = useMemo(() => techs.length, [techs]);
```

## useCallback
```js
const handleAddTech = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);
```
