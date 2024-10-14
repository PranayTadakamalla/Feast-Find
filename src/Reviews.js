import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import swagathDeRoyalImage from "./images/swagath-de-royal.jpeg";
import mindspaceImage from "./images/mindspace.avif";
import itcImage from "./images/ITC Kohenur.jpeg";
import gokulImage from "./images/gokulchat.jpg";
import bawarchiImage from "./images/bawarchi.jpeg";
import shadabImage from "./images/shadab.jpeg";

const Reviews = () => {
  const [restaurants] = useState([
    {
      name: "Swagath-De-Royal",
      image: swagathDeRoyalImage,
      review:
        "Everything was perfect right from check-in to check-out the staff was supportive.",
      rating: 3.5,
    },
    {
      name: "Mindspace Social",
      image: mindspaceImage,
      review:
        "We really enjoy working with the MindSpace team, they are kind and professional.",
      rating: 4.2,
    },
    {
      name: "ITC Kohenur",
      image: itcImage,
      review:
        "Beautiful hotel with extremely kind and helpful staff. Always welcoming and very professional!",
      rating: 5,
    },
    {
      name: "Gokul Chat Bandar",
      image: gokulImage,
      review:
        "Wonderful Chat and it definetly has a ring to old nostalgic vibes there. Loved it..!!!",
      rating: 3,
    },
    {
      name: "Bawarchi",
      image: bawarchiImage,
      review:
        "Briyani was really tasteful and will defiently visit again.....",
      rating: 3.5,
    },
    {
      name: "Shadab Hotel Restaurant",
      image: shadabImage,
      review:
        "Visited in the Holy Month of Ramzan and stuned by the crowd but the food was amazing",
      rating: 2.8,
    },
  ]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} color="gold" />);
    }
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalf} color="gold" />);
    }

    return stars;
  };

  return (
    <div className="container mt-5">
      <div className="about-section">
        <h2>Restaurants</h2>
        <br />
        <div className="row row-cols-3">
          {restaurants.map((restaurant, index) => (
            <div className="col" key={index}>
              <div className="card custom-card">
                <img
                  src={restaurant.image}
                  className="card-img-top"
                  alt={restaurant.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <div className="d-flex align-items-center">
                    {renderStars(restaurant.rating)}
                    <span className="ml-2">{restaurant.rating}</span>
                  </div>
                  <p className="card-text">{restaurant.review}</p>
                  <Link
                    to={`/reviews/${index}`}
                    className="btn btn-primary mt-auto"
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
