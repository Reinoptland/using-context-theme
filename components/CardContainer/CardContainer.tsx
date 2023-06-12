import { Theme } from "@/entities/theme";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import styles from "./CardContainer.module.css";
import ProductCard from "../ProductCard/ProductCard";

interface CardContainerProps {}

const CardContainer: React.FC<CardContainerProps> = ({}) => {
  console.log("RERENDER??");
  return (
    <div>
      <ProductCard buttonText="Click me" />
      <ProductCard buttonText="Please friend, click me" />
      <ProductCard buttonText="Hi" />
    </div>
  );
};

export default CardContainer;
