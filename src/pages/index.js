/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { useQuery, gql } from "@apollo/client"

import Layout from "../components/layout"
import SEO from "../components/seo"

const APOLLO_QUERY = gql`
  query {
    hello
  }
`

const IndexPage = (props) => {
  const { data, loading, error } = useQuery(APOLLO_QUERY)
  return (
    <Layout>
      <SEO title="Home" />
      
      
      
      <Styled.a as={Link} to="/page-2">
        Go to page 2
      </Styled.a>
    </Layout>
  )
}

export default IndexPage
