import * as _ from 'lodash'

import SkillData from '../_data/stats/skill-data'

const findPrimaryAttributes = (attributes) => {
  return _(attributes)
    .sortBy('score')
    .reverse()
    .map((attr) => attr.group)
    .slice(0, 3)
    .value()
}

const findPriorityCutoff = (attributes) => {
  let highestScore = _(attributes)
    .map((attribute) => attribute.score)
    .max()

  return highestScore > 2 ? highestScore - 1 : highestScore
}

const groupByPriority = (skills, cutoff) => {
  return _.groupBy(skills, (skill) => {
    return skill >= cutoff ? 'priority' : 'random'
  })
}

const skillsByPriority = (skills, attributes) => {
  let allSkills = _.shuffle(SkillData)
  let populatedSkills = []
  let primaryAttributes = findPrimaryAttributes(attributes)
  let priorityCutoff = findPriorityCutoff(attributes)
  let groupedSkills = groupByPriority(skills, priorityCutoff)

  groupedSkills.priority.map((score) => {
    let randomGroup = _(primaryAttributes)
      .shuffle()
      .first()
    let newSkill = _.find(allSkills, { group: randomGroup })
    _.remove(allSkills, newSkill)
    populatedSkills.push({ ...newSkill, score: score })
  })

  groupedSkills.random.map((score) => {
    let newSkill = _.first(allSkills)
    _.remove(allSkills, newSkill)
    populatedSkills.push({ ...newSkill, score: score })
  })

  return populatedSkills
}

const getSkills = (template) => {
  template.skills = skillsByPriority(template.skills, template.attributes)

  return template
}

export default getSkills
