import React, { useState, useEffect } from "react";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const reviewData = {
      name,
      review,
      rating,
      date
    };

    useEffect(() => {
      localStorage.setItem("reviewData", JSON.stringify(reviewData));
    }, [reviewData]);
  };

  const displayReviewData = () => {
    const reviewData = JSON.parse(localStorage.getItem("reviewData"));

    if (reviewData) {
      return (
        <div>
          <h3>Review</h3>
          <p>Name: {reviewData.name}</p>
          <p>Review: {reviewData.review}</p>
          <p>Rating: {reviewData.rating}</p>
          <p>Date: {reviewData.date}</p>
        </div>
      );
    }
  };

  return (
    <div>
      <h3>Write a review</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
        />
        <textarea
          name="review"
          placeholder="Your review"
          value={review}
          onChange={handleReviewChange}
        />
        <select
          name="rating"
          value={rating}
          onChange={handleRatingChange}
        >
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <input type="date" name="date" value={date} onChange={handleDateChange} />
        <input type="submit" value="Submit" />
      </form>
      {displayReviewData()}
    </div>
  );
};

export default ReviewForm;
