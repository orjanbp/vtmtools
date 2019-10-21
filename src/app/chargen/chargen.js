import React, { useContext } from 'react'
import { OutputContext } from '../../_stores/chargen-store'

import CharacterMortal from './forms/character-mortal'

const CharacterGenerator = () => {
  const [output, setOutput] = useContext(OutputContext)

  const handleOutput = newOutput => {
    setOutput(output => [...output, newOutput])
    console.log(output)
  }

  return (
    <div id="chargen">
      <div id="forms">
        <CharacterMortal output={handleOutput} />
      </div>
      <div id="output">
        <ul>
          {output.map(item => (
            <li>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CharacterGenerator
