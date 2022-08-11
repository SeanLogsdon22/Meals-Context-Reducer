import { useState } from "react";

const MealForm = ({ onAddToCart }) => {
  const [inputVal, setInputVal] = useState(1);

  const changeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const cartHandler = (inputVal) => {
    onAddToCart(inputVal);
  };

  return (
    <>
      <div>
        <input
          placeholder="Amount #"
          value={inputVal}
          onChange={changeHandler}
        />
        <button onClick={cartHandler}>Add to Cart</button>
      </div>
    </>
  );
};

export default MealForm;
