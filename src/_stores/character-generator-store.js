import React, { useState } from 'react'

const TypeContext = React.createContext([])
const OutputContext = React.createContext([])

const CharacterGeneratorStore = ({ children }) => {
  const [type, setType] = useState(0)
  const [output, setOutput] = useState([])

  return (
    <TypeContext.Provider value={[type, setType]}>
      <OutputContext.Provider value={[output, setOutput]}>
        {children}
      </OutputContext.Provider>
    </TypeContext.Provider>
  )
}

export { TypeContext, OutputContext }
export default CharacterGeneratorStore
