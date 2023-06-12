import { Theme } from "@/entities/theme";
import styles from "./Card.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/pages";

interface CardProps extends React.ComponentPropsWithRef<"div"> {}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div {...props} className={styles[`card${theme}`]}>
      {children}
    </div>
  );
};

export default Card;
