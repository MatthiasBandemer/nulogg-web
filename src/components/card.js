import React from "react"
import { Link } from "gatsby"

const Card = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={restaurant.node.image.publicURL}
            alt={restaurant.node.image.publicURL}
            width="300px"
          />
        </div>
        <div className="uk-card-body">
          <p id="title" className="uk-text-large">
            {restaurant.node.name}
          </p>
          <p id="description" className="uk-text-small">
            {restaurant.node.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card