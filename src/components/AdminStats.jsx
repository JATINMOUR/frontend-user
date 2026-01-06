export default function AdminStats({ reviews }) {
  const totalFeedback = reviews.length;

  const avgRating =
    reviews.length === 0
      ? 0
      : (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <p>Total Feedback</p>
        <h2>{totalFeedback}</h2>
      </div>

      <div className="stat-card">
        <p>Customer Sat (Avg)</p>
        <h2 className="orange">{avgRating}</h2>
      </div>

      <div className="stat-card">
        <p>System Status</p>
        <h3 className="green">✔ Live Monitoring</h3>
      </div>
    </div>
  );
}
