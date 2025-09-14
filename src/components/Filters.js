
import React from "react";
import "./Filters.css";

const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

export default function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  nonVegOnly,
  onVegOnlyChange,
  onNonVegOnlyChange,
}) {
  return (
    <div className="filters">
       <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-bar"
      />

     
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

     
     
      
      <div className="toggles">
        <label>
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={() => onVegOnlyChange(!vegOnly)}
          />
          Veg Only
        </label>
        <label>
          <input
            type="checkbox"
            checked={nonVegOnly}
            onChange={() => onNonVegOnlyChange(!nonVegOnly)}
          />
          Non-Veg Only
        </label>
      </div>
    </div>
  );
}
