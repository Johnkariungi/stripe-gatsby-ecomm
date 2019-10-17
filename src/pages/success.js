import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Success" />
    <h1>You just bought a great product!</h1>
    <p>Thank you for your purchase</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
