
import React, { useState } from "react";
import dishes  from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [modalDish, setModalDish] = useState(null);

  // Filtering Logic
  let filteredDishes = dishes.filter((d) => d.mealType.toLowerCase() === selectedCategory.toLowerCase());

  if (searchTerm) {
    filteredDishes = filteredDishes.filter((d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (vegOnly && !nonVegOnly) {
    filteredDishes = filteredDishes.filter((d) => d.type === "Veg");
  }

  if (nonVegOnly && !vegOnly) {
    filteredDishes = filteredDishes.filter((d) => d.type === "Non Veg");
  }

  // Add/Remove handlers
  const addDish = (id) => setSelectedDishes([...selectedDishes, id]);
  const removeDish = (id) =>
    setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));

  // Count selected per category
  const categoryCounts = dishes.reduce((acc, d) => {
    if (selectedDishes.includes(d.id)) {
      acc[d.mealType] = (acc[d.mealType] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="app-container">

      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        nonVegOnly={nonVegOnly}
        onVegOnlyChange={setVegOnly}
        onNonVegOnlyChange={setNonVegOnly}
      />

      <DishList
        dishes={filteredDishes}
        selectedDishes={selectedDishes}
        onAddDish={addDish}
        onRemoveDish={removeDish}
        onViewIngredients={setModalDish}
      />

      <IngredientModal dish={modalDish} onClose={() => setModalDish(null)} />

     
      <div className="summary">
        <p>
          Selected:{" "}
          {Object.entries(categoryCounts).map(([cat, count]) => (
            <span key={cat}>
              {cat}: {count} &nbsp;
            </span>
          ))}
        </p>
        <p>Total: {selectedDishes.length}</p>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
}

export default App;
