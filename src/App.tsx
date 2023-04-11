import React, {useState} from 'react';

import Station from './components/Station/Station';
import {stations} from './helpers/stations';

function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const {checked, value} = e.target

    if (checked) {
      if (selectedIds !== null && selectedIds.length < 2) {
        setSelectedIds(prev=> ([...prev, value]))
      } else if (selectedIds.length === 2) {
        // like in yandex maps:
        // setSelectedIds(prev => [prev[0], value])

        // clear all and add last choice
        setSelectedIds([])
        setSelectedIds(prev => [...prev, value])
      }
    }

    if (!checked) {
      setSelectedIds(selectedIds.filter((item) => item !== value));
    }
  }


  // TODO > if indexes[0] < indexes[1] ? direct case : indirect case

  return (
    <>
      <button onClick={() => setSelectedIds([])}>reset</button>
      {stations.map(({name, id}) => {
        return (
          <Station
            onChange={handleChange}
            id={id}
            name={name}
            selectedIds={selectedIds}
            key={id}
          />
        );
      })}
    </>
  );

}
export default App;
