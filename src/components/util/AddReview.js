import { useEffect, useState } from "react"

export default function AddReview(props) {
  const [reviewersName, setReviewersName] = useState("")
  const [reviewRating, setReviewRating] = useState("")
  const [reviewText, setReviewText] = useState("")
  const [review, setReview] = useState({})

  function HandleReview() {
    useEffect(() => {
      setReview({name : reviewersName,
        rating : reviewRating,
        review : reviewText})
    }, [])

    
  }

  return (
    <div className="actual-reviews">
      <div className="leave-a-review-heading">
        <h3>Leave a review</h3>
      </div>
      <div className="review-user">
        <input 
        type="text"
        placeholder="Name"
        onChange={(event) => setReviewersName(event.target.value)}/>
      </div>

      <div className="users-rating">
        Rating

        <input
        type="number"
        min="1"
        max="5"
        onChange={(event) => setReviewRating(event.target.value)}/>/5
      </div>

      <div className="users-review">
        <input 
        type="subject"
        placeholder="Your review here"
        onChange={(event) => setReviewText(event.target.value)}/>
      </div>

      <div className="submit-review">
        <button onClick={HandleReview()}
        >Submit</button>
      </div>
    </div>
  )
}