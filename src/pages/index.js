import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import RestaurantsComponent from "../components/restaurants"
import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query MyQuery {
          allStrapiRestaurant {
            edges {
              node {
                strapiId
                owner {
                  username
                }
                name
                description
                image {
                  id
                  publicURL
                }
                menus {
                  id
                  name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Restaurants</h1>
            <RestaurantsComponent restaurants={data.allStrapiRestaurant.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
