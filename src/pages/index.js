import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Buy Jogger Pants!</h1>
    <button>Buy Pants</button>
  </Layout>
)

export default IndexPage
