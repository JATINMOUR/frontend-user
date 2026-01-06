import { useState } from "react";
import api from "../api";

export default function UserFeedback() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  const submitFeedback = async () => {
    if (!rating || !review) {
      setMessage("Please give rating and review");
      return;
    }

    await api.post("/reviews/submit", { rating, review });
    setMessage("Thank you for your feedback!");
    setRating(0);
    setReview("");
  };

  return (
    <div className="feedback-card">
      <h2>We value your feedback!</h2>
      <p className="subtitle">
        Tell us about your experience so we can improve our services.
      </p>

      <label>Star Rating</label>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "star active" : "star"}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <label>Your Detailed Review</label>
      <textarea
        placeholder="What did you like or dislike?"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button onClick={submitFeedback}>
        ✈ Submit Feedback
      </button>

      {message && <p className="msg">{message}</p>}
    </div>
  );
}
