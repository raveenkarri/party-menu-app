
import React from "react";
import "./DishCard.css";

export default function DishCard({
  dish,
  onAddDish,
  onRemoveDish,
  isSelected,
  onViewIngredients,
}) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} className="dish-img" />
      <h3>{dish.name}</h3>
      <p>{dish.type}</p>
      <p>{dish.description}</p>
      <div className="dish-actions">
        {isSelected ? (
          <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>
            Remove
          </button>
        ) : (
          <button className="add-btn" onClick={() => onAddDish(dish.id)}>
            Add
          </button>
        )}
        <button className="ingredient-btn" onClick={() => onViewIngredients(dish)}>
          Ingredients
        </button>
      </div>
    </div>
  );
}
