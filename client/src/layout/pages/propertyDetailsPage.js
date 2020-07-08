import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import * as PropertiesActions from "../../store/actions/propertiesActions";
import DefaultCard from "../../components/common/defaultCard";
import NavButton from "../../components/common/navButton";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import config from "../../../config";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const PropertyPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const storeProperties = useSelector((state) => state.propertiesReducer.properties);

  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: config.GOOGLE_MAPS_API_KEY });

  // get properties on mount
  useEffect(() => {
    let filterProperty =
      storeProperties.length > 0 && storeProperties.find((data) => data._id === id);
    if (filterProperty) {
      setProperty(filterProperty);
    } else {
      dispatch(PropertiesActions.getProperties());
    }
  }, []);

  // update properties
  useEffect(() => {
    if (storeProperties.length) {
      let filterProperty = storeProperties.find(
        (data) => data._id === id && data !== property
      );
      setProperty(filterProperty);
    }

  }, [storeProperties]);

  const renderImageGallery = (property) => {
    return (
      <div className="property-image-gallery">
        {
          property.images.map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </div>
    )
  };

  const renderGoogleMap = (property) => {
    const center = {
      lat: Number(property.location.coordinates[0]),
      lng: Number(property.location.coordinates[1])
    };
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker
          position={center}
        />
      </GoogleMap>
    )
  };

  const renderMapsUrl = (property) => {
    const query = `${property.location.coordinates[0]},${property.location.coordinates[1]}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;

    return (
      <div className="google-visit-link">
        <a
          href={url}
          target="_blank" rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
    )
  }

  return (
    <div className="container property-page">
      <div>
        {
          property && (
            <div>
              <DefaultCard property={property} showImage={false} />
              {renderImageGallery(property)}
              {renderMapsUrl(property)}

              {
                isLoaded ? renderGoogleMap(property) : (
                  <div>Loading map...</div>
                )
              }
              {
                loadError && <div>{loadError}</div>
              }
            </div>
          )
        }
        <div className="actions">
          <NavButton path="/" text="Back" />
        </div>
      </div>
    </div >
  );
};

export default PropertyPage;
