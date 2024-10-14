import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import swagathDeRoyalImage from "./images/swagath-de-royal.jpeg";
import mindspaceImage from "./images/mindspace.avif";
import itcImage from "./images/ITC Kohenur.jpeg";

const Home = () => {
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
        <h1>About Feast-Find</h1>
        <br />
        <br />
        <p>
          Feast-Find is your go-to destination for exploring diverse culinary
          experiences and discovering top-notch restaurant reviews.
        </p>
        <p>
          Whether you're a passionate foodie or someone who simply enjoys good
          food, Feast-Find has something for everyone. With our user-friendly
          interface and comprehensive database, you can easily browse through a
          plethora of dining options, from cozy cafes to upscale restaurants,
          and make informed dining decisions.
        </p>
        <p>
          Join our vibrant community of food enthusiasts, share your culinary
          adventures, and embark on a gastronomic journey with Feast-Find!
        </p>
      </div>
      <br />
      <br />
      <hr />
      <h2>Restaurants</h2>
      <br />
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
  );
};

export default Home;
