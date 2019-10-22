import React from 'react'
import * as _ from 'lodash'

import AttributeData from '../_data/stats/attribute-data'

const BuildAttributes = (range) => {
  let attributes = [...AttributeData]
  let scores = _.shuffle(range)

  return attributes.map((data, i) => (
    {...data, score: scores[i]}
  ))
}

const Attributes = ({ range }) => {
  let attributeRange = BuildAttributes(range)
  console.log(attributeRange)

  return (
    <div>
      {attributeRange.map(attribute => (
        <span>
          {attribute.name} <b>{attribute.score}</b>
        </span>
      ))}
    </div>
  )
}

export default Attributes
