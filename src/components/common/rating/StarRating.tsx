import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (rating >= i) {
      // Full star
      stars.push(<FaStar key={i} className="text-yellow-400 w-5 h-5" />);
    } else if (rating >= i - 0.5) {
      // Half star
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 w-5 h-5" />);
    } else {
      // Empty star
      stars.push(<FaRegStar key={i} className="text-gray-300 w-5 h-5" />);
    }
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default StarRating;
