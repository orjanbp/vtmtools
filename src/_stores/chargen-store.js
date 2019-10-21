import React, { useState } from 'react'

const OutputContext = React.createContext([])

const CharacterGeneratorStore = ({ children }) => {
  const [output, setOutput] = useState(['aaaa'])

  return (
    <OutputContext.Provider value={[output, setOutput]}>
      {children}
    </OutputContext.Provider>
  )
}

export { OutputContext }
export default CharacterGeneratorStore
