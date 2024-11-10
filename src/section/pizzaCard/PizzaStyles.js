import styled from "styled-components";
import { colors } from "../../config/theme";



export const PizzaCardContainer = styled.div`
width: 326px;
    height: 342px;
    overflow: hidden;
    /* padding: 20px; */
    position: relative;
    margin: 20px auto;
    /* border: 1px solid red; */
    display: flex;
`;

export const PizzaScrollableContent = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 20px;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};
    border-radius: 8px;
  }
`;

export const PizzaItem = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  scroll-snap-align: start; 
  z-index: 99999;
  color: ${colors.white};

`;

export const PizzaImage = styled.img`
  width: 250px; 
  height: 250px;
  border-radius: 50%;
  /* position: absolute; */
  object-fit: cover;
  margin-bottom: 10px;
`;

// Pizza name styling
export const PizzaName = styled.h3`
  font-size: 18px;
  color: ${colors.text};
  margin-bottom: 5px;
`;

// Pizza price styling
export const PizzaPrice = styled.p`
  font-size: 14px;
  color: ${colors.white};
`;
export const PizzaContainerCard = styled.div`
  width: 202px;  
  height: 161px; 
  background-color: ${colors.primary}; 
  border-end-start-radius: 20px;
  border-end-end-radius: 31px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: ${colors.white};
  text-align: center;
  position: absolute;
  left: 19%;
  bottom: 0;
`