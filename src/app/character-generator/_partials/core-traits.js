import * as _ from 'lodash'

import getAttributes from './attributes'
import getSkills from './skills'

const getCoreTraits = (template) => {
  let coreTraits = _.flow([getAttributes, getSkills])(template)
  return coreTraits
}

export default getCoreTraits
