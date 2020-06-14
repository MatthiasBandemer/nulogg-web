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
                menus {
                  id
                  owner
                }
              }
            }
          }
        }
      `
    )
  
    if (result.errors) {
      throw result.errors
    }
  
    // Create restaurant and menu pages.
    const restaurants = result.data.restaurants.edges
  
    restaurants.forEach((restaurant, index) => {

      createPage({
        path: `/restaurant/${restaurant.node.strapiId}`,
        component: require.resolve("./src/templates/restaurant.js"),
        context: {
          id: restaurant.node.strapiId,
        },
      })

      restaurant.node.menus.forEach((menu, index) => {
          createPage({
            path: `/restaurant/${restaurant.node.strapiId}/menu/${menu.id}`,
            component: require.resolve("./src/templates/menu.js"),
            context: {
              id: menu.id,
              restId: restaurant.node.strapiId,
              ownerId: menu.owner
            },
          })
        })
    })
  }