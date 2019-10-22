import React from 'react'
import * as _ from 'lodash'

import MortalTypes from '../_data/presets/mortal-types'

import getCoreTraits from '../_partials/core-traits'

const MortalGenerator = (data) => {
  let mortalType = _.find(MortalTypes, { id: data.mortalType })
  let mortal = { ...getCoreTraits(mortalType) }

  console.log(mortal)

  return (
    <div style={{ backgroundColor: '#fafafa', padding: '16px', marginBottom: '24px'}}>
      <b>{mortal.name}</b>
      <br />
      <div>
        <b>Attributes</b>
        <br />
        {mortal.attributes.map((attribute) => {
          return (
            <span>
              {attribute.name}: {attribute.score} <br />
            </span>
          )
        })}
      </div>
      <br />
      <div>
        <b>Skills</b>
        <br />
        {mortal.skills.map((skill) => {
          return (
            <span>
              {skill.name}: {skill.score} <br />
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default MortalGenerator
