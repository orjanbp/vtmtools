import React from 'react'
import * as _ from 'lodash'

import AttributeData from '../_data/stats/attribute-data'

const getAttributes = (template) => {
  let attributes = _.shuffle([...template.attributes]).map((score, i) => ({
    ...AttributeData[i],
    score: score
  }))

  return { ...template, attributes: attributes }
}

export default getAttributes
