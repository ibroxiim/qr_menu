import PizzaCard from "../../section/pizzaCard";

import {
  FoodAmount,
  FoodCategories,
  FoodMain,
  FoodOrderButton,
  FoodTitle,
  FoodTotal,
  ParentFood,
} from "./choose-food-style";

const ChooseFood = () => {
  return (
    <ParentFood>
      <div>
        <FoodTitle>
          <h2>ChooseFood</h2>
          <p>Category name</p>
        </FoodTitle>
        <FoodCategories>
          <button>Pizza</button>
          <button>Lavash</button>
          <button>KFC</button>
          <button>Hot-Dog</button>
          <button>Hamburger</button>
          <button>Pizza</button>
          <button>Lavash</button>
          <button>KFC</button>
          <button>Hot-Dog</button>
          <button>Hamburger</button>
        </FoodCategories>
      </div>
      <FoodMain>
        <PizzaCard />
      </FoodMain>
      <FoodAmount>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </FoodAmount>
      <FoodTotal>
        <h3>Total: 112 000 sum</h3>
      </FoodTotal>
      <FoodOrderButton>Joylar</FoodOrderButton>
    </ParentFood>
  );
};

export default ChooseFood;
