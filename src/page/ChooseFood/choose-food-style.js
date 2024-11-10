import styled from "styled-components";
import { colors } from "../../config/theme";

export const ParentFood = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const FoodTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 20px 0;
`;
export const FoodCategories = styled.div`
  max-width: 100%;
  height: 80px;
  padding: 10px;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;

  button {
    padding: 10px 15px;
    border-radius: 12px;
    border: none;
    color: ${colors.textColor};
    background-color: #f5f5f5;
    font-size: 12px;
    font-weight: 500;
    transition: ease-in-out 250ms;
    &:hover {
      cursor: pointer;
      color: ${colors.white};
      background-color: ${colors.primary};
    }
    &:focus-within {
      cursor: pointer;
      color: ${colors.white};
      background-color: ${colors.primary};
    }
  }
`;
export const FoodMain = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FoodMainCard = styled.div`
  background: ${colors.primary};
  border-bottom-left-radius: 31px;
  border-bottom-right-radius: 31px;
  width: 70%;
  min-height: 150px;
`;
export const FoodAmount = styled.div`
  width: 202px;
  height: 48px;
  border: 1px solid #2a9d31;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  button {
    height: 100%;
    width: 35%;
    border: none;
    color: #00000099;
    background: none;
    font-size: 32px;
  }
  span {
    color: #00000099;
    font-size: 22px;
  }
`;
export const FoodTotal = styled.div`
width: 100%;
min-height: 50px;
display: flex;
align-items: center;
justify-content: center;
h3{
  color: ${colors.textColor};
  font-size: 22px;
  font-weight: 500;
}
`
export const FoodOrderButton = styled.button`
  width: 224px;
  height: 40px;
  background: ${colors.primary};
  color: ${colors.white};
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 14px;
  margin: 0 auto;
  cursor: pointer;
`;
