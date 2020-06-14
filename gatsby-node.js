/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
      `
        {
          restaurants: allStrapiRestaurant {
            edges {
              node {
                strapiId
              }
            }
          }
        }
      `
    )
  
    if (result.errors) {
      throw result.errors
    }
  
    // Create restaurant pages.
    const restaurants = result.data.restaurants.edges
    restaurants.forEach((restaurant, index) => {
      createPage({
        path: `/restaurant/${restaurant.node.strapiId}`,
        component: require.resolve("./src/templates/restaurant.js"),
        context: {
          id: restaurant.node.strapiId,
        },
      })
    })
  }