import React from "react"
import { Link } from "gatsby"

import Lista from '../components/lista-sel'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`metabolismo`, `application`, `calorías`]} />
      <Lista />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
