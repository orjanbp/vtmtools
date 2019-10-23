import React from 'react'
import * as _ from 'lodash'

import DataAttributes from '../_data/data-attributes'

const getAttributes = (template) => {
  let attributes = _.shuffle([...template.attributes]).map((score, i) => ({
    ...DataAttributes[i],
    score: score
  }))

  return { ...template, attributes: attributes }
}

export default getAttributes
