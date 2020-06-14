import React from "react"
import Card from "./card"

const Restaurants = ({ restaurants }) => {

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {restaurants.map((restaurant, i) => {
            return (
              <Card restaurant={restaurant} key={`restaurant__${restaurant.node.id}`} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Restaurants