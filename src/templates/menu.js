import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query MenuQuery($id: Int!, $restId: Int!) {
    strapiMenu(strapiId: { eq: $id }) {
      strapiId
      name
      description
      updated_at
      categories {
          id
          name
          description
      }
    }
    strapiRestaurant(strapiId: {eq: $restId}) {
      strapiId
      name
      description
      image {
          publicURL
      }
    }
  }
`

const Menu = ({ data }) => {
  const menu = data.strapiMenu
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
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <h2>{menu.name}</h2>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <ReactMarkdown source={menu.description} />
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle">                
                    Last update: <Moment format="MMM Do YYYY">{menu.updated_at}</Moment>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    { menu.categories.map((category, i) => {
                        return (
                            <div>
                                <h3 className="uk-heading-line uk-text-center"><span>{category.name}</span></h3>
                                <p className="uk-text-italic">{category.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Menu