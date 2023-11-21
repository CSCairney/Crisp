import React from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.scss';

type RatingsProps = {
  rating: number;
};

const Ratings: React.FC<RatingsProps> = ({ rating }) => {
  const starIcons = new Array(5).fill(null);
  for (let i = 0; i < rating; i++) {
    starIcons[i] = <FaStar key={i} size="20" />;
  }

  return (
    <div className="ratings" aria-label={`review star: ${rating}`}>
      {starIcons}
    </div>
  );
};

export default Ratings;
