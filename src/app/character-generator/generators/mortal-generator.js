import React from 'react'
import * as _ from 'lodash'

import MortalTypes from '../_data/presets/mortal-types'

import Attributes from '../_partials/attributes'

const MortalGenerator = data => {
  let mortalType = _.find(MortalTypes, { id: data.mortalType })

  return (
    <>
      <Attributes range={mortalType.attributes} />
    </>
  )
}

export default MortalGenerator
