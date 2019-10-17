import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Canceled" />
    <h1>Oops, sorry something went wrong, that transaction didn't work!</h1>
    <p>Nothing happened.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
