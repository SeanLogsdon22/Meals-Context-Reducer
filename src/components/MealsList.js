import "./MealsList.css";
import MealForm from "./MealForm";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const DUMMY_MEAL_DATA = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99
  }
];

const MealList = () => {
  const context = useContext(CartContext);

  const addToCart = (amount) => {
    context.addItem({
      id: DUMMY_MEAL_DATA.id,
      name: DUMMY_MEAL_DATA.name,
      price: DUMMY_MEAL_DATA.price,
      amount: amount
    });
  };

  return (
    <>
      <div className="meal-list">
        <ul>
          {DUMMY_MEAL_DATA.map((meal) => {
            return (
              <li key={meal.id} className="list">
                {meal.name}: {meal.description}- {meal.price}
                <MealForm onAddToCart={addToCart} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MealList;
