import ContextProvider from "./store/CartProvider";
import Heading from "./components/Heading";
import MealsList from "./components/MealsList";
import MealsDescription from "./components/MealsDescription";
import Cart from "./components/Cart";

const App = () => {
  return (
    <ContextProvider>
      <Cart />
      <Heading />
      <MealsList />
      <MealsDescription />
    </ContextProvider>
  );
};

export default App;
