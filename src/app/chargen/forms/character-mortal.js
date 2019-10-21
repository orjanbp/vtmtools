import React from 'react'
import useForm from 'react-hook-form'

const CharacterMortal = ({ output }) => {
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = () => {
    output('character')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">Create Mortal</button>
    </form>
  )
}
export default CharacterMortal
