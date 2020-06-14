import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query RestaurantQuery($id: Int!) {
    strapiRestaurant(strapiId: { eq: $id }) {
      strapiId
      name
      description
      updated_at
      image {
        publicURL
      }
    }
  }
`

const Restaurant = ({ data }) => {
  const restaurant = data.strapiRestaurant
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={restaurant.image.publicURL}
          data-srcset={restaurant.image.publicURL}
          data-uk-img
        >
          <h1>{restaurant.name}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={restaurant.description} />
            <p>
              <Moment format="MMM Do YYYY">{restaurant.updated_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Restaurant