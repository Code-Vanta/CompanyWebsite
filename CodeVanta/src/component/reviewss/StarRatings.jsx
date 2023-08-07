import React, { useState } from 'react';

const StarRatings = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  return (
    <div>
      <p>Star Rating</p>
      <div className="stars">
        {[...Array(5)].map((star, index) => (
          <Star
            key={index}
            index={index}
            onClick={handleClick}
            filled={index <= rating}
          />
        ))}
      </div>
    </div>
  );
};

const Star = ({ index, onClick, filled }) => {
  const starColor = filled ? 'gold' : 'gray';

  return (
    <button
      key={index}
      type="button"
      onClick={onClick}
      style={{ backgroundColor: starColor }}
    >
      {index + 1}
    </button>
  );
};

export default StarRatings;
