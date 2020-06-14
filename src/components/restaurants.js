import React from "react"
import { Link } from "gatsby"

const Restaurants = ({ restaurants }) => {

  return (
    <div>
        {restaurants.map((restaurant, i) => {
            return (
            <Link to={`/restaurant/${restaurant.node.strapiId}`} className="uk-link-reset">
                <div className="uk-flex-center uk-margin" data-uk-grid>
                    <div className="uk-width-2-3@m">
                        <p id="title" className="uk-text-large">
                            {restaurant.node.name}
                        </p>
                        <p id="description" className="uk-text-small">
                            {restaurant.node.description}
                        </p>
                    </div>
                    <div className="uk-width-1-3@m uk-flex-first">
                        <img
                        src={restaurant.node.image.publicURL}
                        alt={restaurant.node.image.publicURL}
                        width="250"
                        />
                    </div>
                </div>
            </Link>)
        })}
    </div>
  )
}

export default Restaurants