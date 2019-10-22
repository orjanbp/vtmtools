import React from 'react'
import * as _ from 'lodash'

const BuildAttributes = (range) => {
  let attributes = [...AttributeNames]
  let scores = _.shuffle(range)

  return attributes.map((attribute, i) => (
    {name: attribute, score: scores[i]}
  ))
}

const Attributes = ({ range }) => {
  let attributes = BuildAttributes(range)

  return (
    <div>
      {attributes.map(attribute => (
        <span>
          {attribute.name} <b>{attribute.score}</b>
        </span>
      ))}
    </div>
  )
}

export default Attributes
