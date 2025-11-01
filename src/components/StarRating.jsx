import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex gap-2 text-3xl cursor-pointer">
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{ color: star <= rating ? "gold" : "lightgray" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
