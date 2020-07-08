import React from "react";
import PropTypes from "prop-types";

import { CURRENCY } from "../../constants";

const DefaultCard = (props) => {
  const property = { ...props.property };

  return (
    <div className="card">
      {
        props.showImage && property.images && property.images.length && (
          <div className="img-container">
            <img src={property.images[0]} />
          </div>
        )
      }
      <div className="text-container">
        <h3 className="title">
          {property.name}
          <span className="id-text">{property._id}</span>
        </h3>
        <p className="description">{property.description}</p>
        <p className="street">
          {property.location.street}
        </p>
        <p className="price">
          {property.sold_price}
          <sup className="currency">{property.currency ? property.currency : CURRENCY}</sup>
        </p>
      </div>
    </div>
  );
};

DefaultCard.defaultProps = {
  showImage: true
};

DefaultCard.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    sold_price: PropTypes.number,
    images: PropTypes.array,
    currency: PropTypes.string,
    location: PropTypes.shape({
      type: PropTypes.string,
      coordinates: PropTypes.array
    }),
  }),
  showImage: PropTypes.bool,
};

export default DefaultCard;
