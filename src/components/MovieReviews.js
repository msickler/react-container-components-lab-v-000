
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
  {reviews.map(review =>
    <div className="review">
    {review.display_title}
    </div>
  )}
  </div>
)
