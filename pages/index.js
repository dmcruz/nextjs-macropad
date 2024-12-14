import React, { useState } from 'react';
import Head from 'next/head';
import KeyBoard from '../components/key-board';
import KeyCap from '../components/key-cap';

export default function Home() {
  
  const GRAY = 'bg-gray-500';
  const RED = 'bg-red-500';
  const BLACK = 'bg-black';
  const GREEN = 'bg-green-500';
  const YELLOW = 'bg-yellow-500';
  const BLUE = 'bg-blue-500';
  const ORANGE = 'bg-orange-500';
  const [keyCapCount, setKeyCapCount] = useState(3);
  const [keyCapColors, setKeyCapColors] = useState({0: GRAY, 1: GRAY, 2: GRAY});
  const [keyCapCharacters, setKeyCapCharacters] = useState({0: '1', 1: '2', 2: '3'});

  const handleKeyCapCountChange = (event) => {
    setKeyCapCount(parseInt(event.target.value));
    setKeyCapColors({...keyCapColors, [keyCapCount]: GRAY});
  };

  const handleCharacterChange = (index, event) => {
    setKeyCapCharacters({ ...keyCapCharacters, [index]: event.target.value });
  }


  const renderKeyCapConfigs = () => {
      const keyCapConfigs = [];
      for (let i = 0; i < keyCapCount; i++) {
        if (keyCapCharacters[i] === undefined) {
          setKeyCapCharacters({ ...keyCapCharacters, [i]: i + 1 });
        }
        keyCapConfigs.push(
          <div key={`kcc${i}`} className="flex items-center">
            <div className="mr-4 center">
              <label htmlFor="keyCapCount" className="mr-2 font-bold">Color for {i + 1}: </label>
              <select className="border p-1 w-20" value={keyCapColors[i]} onChange={(event) => handleColorChange(i, event)}>
                <option value={GRAY}>Gray</option>
                <option value={RED}>Red</option>
                <option value={GREEN}>Green</option>
                <option value={BLUE}>Blue</option>
                <option value={BLACK}>Black</option>
                <option value={YELLOW}>Yellow</option>
                <option value={ORANGE}>Orange</option>
              </select>
            </div>

            <div>
              <label htmlFor='keyCapCharacter' className="mr-2 font-bold">Char for {i + 1}: </label>
              <input type='text' className="border p-1 w-20" value={keyCapCharacters[i]} onChange={(event) => handleCharacterChange(i, event)} maxLength={5} />
            </div>
          </div>
        );
      }
      return keyCapConfigs;
    };

  const renderKeyCaps = () => {
    const keyCaps = [];
    for (let i = 0; i < keyCapCount; i++) {
      keyCaps.push(
        <KeyCap key={`kc${i}`} character={keyCapCharacters[i]} backgroundColor={keyCapColors[i] }>
        </KeyCap>
      );
    }
    return keyCaps;
  };

  const handleColorChange = (index, event) => {
    setKeyCapColors({ ...keyCapColors, [index]: event.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Head>
        <title>Macropad Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-4xl flex">
        <div className="w-1/2 flex items-center justify-center">
          <KeyBoard rows={4} columns={3}>
            {renderKeyCaps()}
          </KeyBoard>
        </div>
        <div className="w-1/2 pl-4">
          <div className="mb-4 flex justify-center">
            <label htmlFor="keyCapCount" className="mr-2 font-bold">Number of Key Caps: </label>
            <select className="border p-2 w-32 h-12" id="keyCapCount" value={keyCapCount} onChange={handleKeyCapCountChange}>
              <option value={3}>3</option>
              <option value={6}>6</option>
              <option value={9}>9</option>
              <option value={12}>12</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {renderKeyCapConfigs()}
          </div>
        </div>
      </main>
    </div>
  );
}
