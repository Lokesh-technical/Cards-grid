import { Card } from "@mui/material";
import React from "react";

const UserProfileCard = ({ name, description, imageSrc, items }) => {
  return (
    <Card className="user-card">
      <div className="card-container">
        <img className="image" src={imageSrc} alt={name} />
        <div>
          <p className="card-name">{name}</p>
          <p className="card-desc">{description}</p>
          <div className="cards-item-container">
          {items.map((item, index) => (
             <div key={index} className="cards-items">
              {item}
            </div>
          ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserProfileCard;
