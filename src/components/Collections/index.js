import React from "react";
import "./collections.css";
import { Link, BrowserRouter as Router, } from 'react-router-dom'

const collections = [
  {
    id: 1,
    title: "Newly Opened",
    places: "19 Places",
    image:
      "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015793.jpg",
  },
  {
    id: 2,
    title: "Trending This Week",
    places: "30 Places",
    image:
      "https://b.zmtcdn.com/data/collections/d7e3f1d03609fdd6672872662fa5bcf7_1637735746.png",
  },
  {
    id: 3,
    title: "Best of Pune",
    places: "89 Places",
    image:
      "https://b.zmtcdn.com/data/collections/eb69f5f6e70ac43c8c0923fef39fabaf_1535615947.jpg",
  },
  {
    id: 4,
    title: "Work Friendly Places",
    places: "26 Places",
    image:
      "https://b.zmtcdn.com/data/collections/332d70c0ff0894191d1661739ce18fbd_1605194226.jpg",
  },
];

const Collections = () => {
  return (
      <Router>
    <div className="collections-wrapper">
      <div className="collections-content">
        <h3>Collections</h3>
        <div className="description">
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Pune, based on trends
        </p>
        <Link to="/" className="desc-link">All collections in Pune <i class="fa fa-caret-right"></i></Link>
        </div>
      </div>
      <div className="collection-card-wrapper">
        {collections.map((collection) => {
          return (
            <div className="collection-card">
              <img src={collection.image} />
              <div className="card-overlay">
                <div className="collection-card-text">
                  <h4>{collection.title}</h4>
                  <p>
                    {collection.places} <Link to="/"><i class="fa fa-caret-right"></i></Link>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </Router>
  );
};

export default Collections;
