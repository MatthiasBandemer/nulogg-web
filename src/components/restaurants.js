import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

const Restaurants = ({ restaurants }) => {

  return (
    <div>
        {restaurants.map((restaurant, i) => {
            return (
            <Link to={`/restaurant/${restaurant.node.strapiId}`} className="uk-link-reset">
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                    <div className="uk-card-media-left uk-cover-container">
                        <img src={restaurant.node.image.publicURL} alt={restaurant.node.image.publicURL} data-uk-cover/>
                        <canvas id="picture" width="600" height="400">Picture</canvas>
                    </div>
                    <div className="uk-card-body">
                        <h3 id="title" className="uk-card-title">
                            {restaurant.node.name}
                        </h3>
                        <p id="description">
                            <ReactMarkdown source={restaurant.node.description} />
                        </p>
                    </div>
                </div>
            </Link>)
        })}
    </div>
  )
}

export default Restaurants