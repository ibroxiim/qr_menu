import {
  PizzaCardContainer,
  PizzaScrollableContent,
  PizzaItem,
  PizzaImage,
  PizzaName,
  PizzaPrice,
  PizzaContainerCard,
} from "./PizzaStyles"; // Import the styled components
import { pizzas } from "../../context/pizzaa/data";

const PizzaCard = () => {
  return (
    <PizzaCardContainer>
      <PizzaContainerCard>
        <h2>QR Menu</h2>
      </PizzaContainerCard>
      <PizzaScrollableContent>
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id}>
            <PizzaImage src={pizza.image} alt={pizza.name} />
            <PizzaName>{pizza.name}</PizzaName>
            <PizzaPrice>{pizza.price}</PizzaPrice>
          </PizzaItem>
        ))}
      </PizzaScrollableContent>
    </PizzaCardContainer>
  );
};

export default PizzaCard;
