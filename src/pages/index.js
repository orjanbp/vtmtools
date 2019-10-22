import React from 'react'
import { Link } from 'gatsby'

import Layout from '../_includes/layout'
import SEO from '../_includes/seo'

import CharacterGenerator from '../app/character-generator/character-generator'
import CharacterGeneratorStore from '../_stores/character-generator-store'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World!</h1>

    <CharacterGeneratorStore>
      <CharacterGenerator />
    </CharacterGeneratorStore>
  </Layout>
)

export default IndexPage
