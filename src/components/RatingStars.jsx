export default function RatingStars({ rating, setRating }) {
  return (
    <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
      <option value={1}>1 Star</option>
      <option value={2}>2 Star</option>
      <option value={3}>3 Star</option>
      <option value={4}>4 Star</option>
      <option value={5}>5 Star</option>
    </select>
  );
}
