import { useEffect, useState } from "react";
import api from "../api";
import AdminStats from "./AdminStats";

export default function Dashboard() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
    const interval = setInterval(fetchReviews, 5000); // auto-refresh
    return () => clearInterval(interval);
  }, []);

  const fetchReviews = async () => {
    const res = await api.get("/reviews/all");
    setReviews(res.data);
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>

      {/* STATS */}
      <AdminStats reviews={reviews} />

      {/* LIVE FEEDBACK */}
      <div className="feed">
        <h3>Live Feedback Stream</h3>

        {reviews.map((r) => (
          <div key={r._id} className="card">
            <p><b>Rating:</b> {r.rating} ⭐</p>
            <p><b>Review:</b> {r.review}</p>
            <p><b>AI Summary:</b> {r.aiSummary}</p>
            <p><b>AI Action:</b> {r.aiAction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
