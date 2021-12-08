import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";

import Rating from "../Components/Rating";

const MovieCard = ({ movie: { title, posterUrl, description, rate } }) => {
  return (
    <div className="col-4 mt-2">
      <Card
        border="warning"
        style={{ width: "18rem", color: "white", backgroundColor: "black" }}
        variant="dark"
      >
        <CardImg
          top
          width="100%"
          style={{ height: `300px` }}
          src={posterUrl}
          alt="Card image cap"
        />
        <CardTitle className="card-title" style={{ marginLeft: "15px" }}>
          <div className="row ">
            <h4>{title}</h4>
          </div>
        </CardTitle>

        <CardBody variant="dark">
          <div className="row">
            <CardText>{description}</CardText>
          </div>
          <div className="row">
            <Rating rating={rate} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
