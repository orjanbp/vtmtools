import React, { useContext } from 'react'
import { TypeContext, OutputContext } from '../../_stores/character-generator-store'

import MortalForm from './forms/mortal-form'
import MortalGenerator from './generators/mortal-generator'

const CharacterGenerator = () => {
  const [type, setType] = useContext(TypeContext)
  const [output, setOutput] = useContext(OutputContext)

  const handleOutput = output => {
    setOutput(current => [output, ...current])
  }

  const generateCharacter = data => {
    switch (type) {
      case 0: // Mortal NPC
        handleOutput(MortalGenerator(data))
        break
      default:
        break
    }
  }

  return (
    <div id="chargen">
      <MortalForm callback={generateCharacter} />
      <div id="output">
          {output.map(item => (
            <div>{item}</div>
          ))}
      </div>
    </div>
  )
}

export default CharacterGenerator
