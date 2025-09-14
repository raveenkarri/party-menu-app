// src/components/IngredientModal.js
import React from "react";
import "./IngredientModal.css";

export default function IngredientModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <h4>Ingredients:</h4>
        <ul>
          {dish.ingredients.map((ing, i) => (
            <li key={i}>
              {ing.name} - {ing.quantity}
            </li>
          ))}
        </ul>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
