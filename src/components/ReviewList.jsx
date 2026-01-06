import { useEffect, useState } from "react";
import api from "../api";

export default function ReviewList({ refresh }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.get("/reviews/all").then(res => setReviews(res.data));
  }, [refresh]);

  return (
    <div className="box">
      <h2>Admin Panel (Live Data)</h2>

      {reviews.map(r => (
        <div key={r._id} className="card">
          <p><b>Rating:</b> {r.rating} ⭐</p>
          <p><b>Review:</b> {r.review}</p>
          <p><b>AI Summary:</b> {r.aiSummary}</p>
          <p><b>AI Action:</b> {r.aiAction}</p>
        </div>
      ))}
    </div>
  );
}
