import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Movie = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.rate}</Card.Text>
      </Card.Body>
      <Link to={`/movie/${movie.id}`}>trailer</Link>
    </Card>
  );
};

export default Movie;
