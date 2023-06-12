import { Theme } from "@/entities/theme";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import styles from "./CardContainer.module.css";
import ProductCard from "../ProductCard/ProductCard";

interface CardContainerProps {
  theme: Theme;
}

const CardContainer: React.FC<CardContainerProps> = ({ theme }) => {
  return (
    <div>
      <ProductCard buttonText="Click me" theme={theme} />
      <ProductCard buttonText="Please friend, click me" theme={theme} />
      <ProductCard buttonText="Hi" theme={theme} />
    </div>
  );
};

export default CardContainer;
