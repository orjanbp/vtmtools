import React from 'react'
import useForm from 'react-hook-form'

import MortalTypes from '../_data/mortal-types'

const MortalForm = ({ callback }) => {
  const { register, handleSubmit, watch, errors } = useForm()

  return (
    <form onSubmit={handleSubmit(callback)}>
      <div>
        <label for="mortalType">Type</label>
        <select name="mortalType" ref={register}>
          {MortalTypes.map(type => (
            <option value={type.id}>{type.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Generate Character</button>
    </form>
  )
}

export default MortalForm
