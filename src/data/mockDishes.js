

const dishes = [
  {
    id: 1,
    name: "Kadhai Paneer 1",
    mealType: "STARTER",
    type: "Veg",
    description: "A spicy and flavorful paneer dish cooked with bell peppers, onions, and special kadhai masala.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "100g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 2,
    name: "Kadhai Paneer 2",
    mealType: "MAIN COURSE",
    type: "Non Veg",
    description: "A spicy and flavorful paneer dish cooked with bell peppers, onions, and special kadhai masala.",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Bell Peppers", quantity: "120g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "12g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 3,
    name: "Kadhai Paneer 3",
    mealType: "DESSERT",
    type: "Veg",
    description: "A spicy and flavorful paneer dish cooked with bell peppers, onions, and special kadhai masala.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "100g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 4,
    name: "Kadhai Paneer 4",
    mealType: "SIDES",
    type: "Non Veg",
    description: "A spicy and flavorful paneer dish cooked with bell peppers, onions, and special kadhai masala.",
    ingredients: [
      { name: "Paneer", quantity: "220g" },
      { name: "Bell Peppers", quantity: "110g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 5,
    name: "Kadhai Paneer 5",
    mealType: "STARTER",
    type: "Veg",
    description: "A spicy and flavorful paneer dish cooked with bell peppers, onions, and special kadhai masala.",
    ingredients: [
      { name: "Paneer", quantity: "180g" },
      { name: "Bell Peppers", quantity: "90g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 6,
    name: "Kadhai Paneer 6",
    mealType: "MAIN COURSE",
    type: "Non Veg",
    description: "A spicy and flavorful paneer dish cooked with bell peppers, onions, and special kadhai masala.",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Bell Peppers", quantity: "120g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "15g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 7,
    name: "Kadhai Paneer 7",
    mealType: "DESSERT",
    type: "Veg",
    description: "A sweet variation of paneer with mild spices.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "80g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "40g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 8,
    name: "Kadhai Paneer 8",
    mealType: "SIDES",
    type: "Non Veg",
    description: "A paneer side dish with rich spices and texture.",
    ingredients: [
      { name: "Paneer", quantity: "220g" },
      { name: "Bell Peppers", quantity: "110g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "12g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 9,
    name: "Kadhai Paneer 9",
    mealType: "STARTER",
    type: "Veg",
    description: "A flavorful starter made with fresh paneer and vegetables.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "100g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 10,
    name: "Kadhai Paneer 10",
    mealType: "MAIN COURSE",
    type: "Non Veg",
    description: "Paneer main course dish with aromatic spices.",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Bell Peppers", quantity: "120g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "15g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 11,
    name: "Kadhai Paneer 11",
    mealType: "DESSERT",
    type: "Veg",
    description: "Sweet paneer dessert cooked with subtle spices.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "80g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "40g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 12,
    name: "Kadhai Paneer 12",
    mealType: "SIDES",
    type: "Non Veg",
    description: "Rich paneer side dish for main courses.",
    ingredients: [
      { name: "Paneer", quantity: "220g" },
      { name: "Bell Peppers", quantity: "110g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "12g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 13,
    name: "Kadhai Paneer 13",
    mealType: "STARTER",
    type: "Veg",
    description: "Spicy paneer starter with bell peppers.",
    ingredients: [
      { name: "Paneer", quantity: "180g" },
      { name: "Bell Peppers", quantity: "90g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 14,
    name: "Kadhai Paneer 14",
    mealType: "MAIN COURSE",
    type: "Non Veg",
    description: "Paneer main dish with rich flavors.",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Bell Peppers", quantity: "120g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "15g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 15,
    name: "Kadhai Paneer 15",
    mealType: "DESSERT",
    type: "Veg",
    description: "Delightful paneer dessert for the sweet tooth.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "80g" },
      { name: "Onion", quantity: "40g" },
      { name: "Tomato", quantity: "40g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  // Dishes 16–30
  {
    id: 16,
    name: "Kadhai Paneer 16",
    mealType: "SIDES",
    type: "Non Veg",
    description: "Paneer side dish with aromatic spices.",
    ingredients: [
      { name: "Paneer", quantity: "220g" },
      { name: "Bell Peppers", quantity: "110g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "12g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 17,
    name: "Kadhai Paneer 17",
    mealType: "STARTER",
    type: "Veg",
    description: "Starter paneer dish with tangy flavors.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "100g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 18,
    name: "Kadhai Paneer 18",
    mealType: "MAIN COURSE",
    type: "Non Veg",
    description: "Main paneer dish with fresh vegetables.",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Bell Peppers", quantity: "120g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "15g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 19,
    name: "Kadhai Paneer 19",
    mealType: "DESSERT",
    type: "Veg",
    description: "Sweet paneer dessert with subtle spices.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "80g" },
      { name: "Onion", quantity: "40g" },
      { name: "Tomato", quantity: "40g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 20,
    name: "Kadhai Paneer 20",
    mealType: "SIDES",
    type: "Non Veg",
    description: "Paneer side dish with bold flavors.",
    ingredients: [
      { name: "Paneer", quantity: "220g" },
      { name: "Bell Peppers", quantity: "110g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "12g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 21,
    name: "Kadhai Paneer 21",
    mealType: "STARTER",
    type: "Veg",
    description: "Fresh paneer starter with vegetables.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "100g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 22,
    name: "Kadhai Paneer 22",
    mealType: "MAIN COURSE",
    type: "Non Veg",
    description: "Paneer main dish with aromatic masala.",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Bell Peppers", quantity: "120g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "15g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 23,
    name: "Kadhai Paneer 23",
    mealType: "DESSERT",
    type: "Veg",
    description: "Paneer dessert with mild spices and sweetness.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "80g" },
      { name: "Onion", quantity: "40g" },
      { name: "Tomato", quantity: "40g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 24,
    name: "Kadhai Paneer 24",
    mealType: "SIDES",
    type: "Non Veg",
    description: "Paneer side dish cooked with bold flavors.",
    ingredients: [
      { name: "Paneer", quantity: "220g" },
      { name: "Bell Peppers", quantity: "110g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "12g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 25,
    name: "Kadhai Paneer 25",
    mealType: "STARTER",
    type: "Veg",
    description: "Paneer starter with fresh vegetables.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "100g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 26,
    name: "Kadhai Paneer 26",
    mealType: "MAIN COURSE",
    type: "Non Veg",
    description: "Main course paneer dish with special kadhai masala.",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Bell Peppers", quantity: "120g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "15g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 27,
    name: "Kadhai Paneer 27",
    mealType: "DESSERT",
    type: "Veg",
    description: "Paneer dessert with subtle flavors.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "80g" },
      { name: "Onion", quantity: "40g" },
      { name: "Tomato", quantity: "40g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 28,
    name: "Kadhai Paneer 28",
    mealType: "SIDES",
    type: "Non Veg",
    description: "Side dish of paneer with bold flavors.",
    ingredients: [
      { name: "Paneer", quantity: "220g" },
      { name: "Bell Peppers", quantity: "110g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "12g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 29,
    name: "Kadhai Paneer 29",
    mealType: "STARTER",
    type: "Veg",
    description: "Starter paneer dish with aromatic spices.",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Bell Peppers", quantity: "100g" },
      { name: "Onion", quantity: "50g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "10g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  },
  {
    id: 30,
    name: "Kadhai Paneer 30",
    mealType: "MAIN COURSE",
    type: "Non Veg",
    description: "Rich paneer main dish with fresh vegetables.",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Bell Peppers", quantity: "120g" },
      { name: "Onion", quantity: "60g" },
      { name: "Tomato", quantity: "50g" },
      { name: "Spices", quantity: "15g" }
    ],
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
  }
];

export default dishes;
