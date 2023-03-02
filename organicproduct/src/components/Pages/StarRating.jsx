import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // get the number of full stars
  const halfStars = Math.ceil(rating - fullStars); // get the number of half stars
  const emptyStars = 5 - fullStars - halfStars; // get the number of empty stars

  // create an array of star elements for full stars
  const fullStarsArr = Array.from({ length: fullStars }, (_, index) => (
    <i key={index} className="fas fa-star"></i>
  ));

  // create an array of star elements for half stars
  const halfStarsArr = Array.from({ length: halfStars }, (_, index) => (
    <i key={index} className="fas fa-star-half-alt"></i>
  ));

  // create an array of star elements for empty stars
  const emptyStarsArr = Array.from({ length: emptyStars }, (_, index) => (
    <i key={index} className="far fa-star"></i>
  ));

  // combine the arrays of star elements into a single array
  const starArr = [...fullStarsArr, ...halfStarsArr, ...emptyStarsArr];

  return <div>{starArr}</div>;
};

export default StarRating;
