import { Theme } from "@/entities/theme";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import styles from "./CardContainer.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useTheme } from "@/contexts/ThemeContext";

interface CardContainerProps {}

const CardContainer: React.FC<CardContainerProps> = ({}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>{theme}</button>
      <ProductCard buttonText="Click me" />
      <ProductCard buttonText="Please friend, click me" />
      <ProductCard buttonText="Hi" />
    </div>
  );
};

export default CardContainer;
