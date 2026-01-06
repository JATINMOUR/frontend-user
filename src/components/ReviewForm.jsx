import { useState } from "react";
import api from "../api";

export default function ReviewForm({ onSuccess }) {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const submitReview = async () => {
    await api.post("/reviews/submit", { rating, review });
    setReview("");
    onSuccess(); // refresh admin list
  };

  return (
    <div className="box">
      <h2>User Review</h2>

      <select value={rating} onChange={(e) => setRating(+e.target.value)}>
        {[1,2,3,4,5].map(n => (
          <option key={n} value={n}>{n} Star</option>
        ))}
      </select>

      <textarea
        placeholder="Write your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button onClick={submitReview}>Submit</button>
    </div>
  );
}
