import { Theme } from "@/entities/theme";
import styles from "./Card.module.css";

interface CardProps extends React.ComponentPropsWithRef<"div"> {
  // add more props
  theme: Theme;
}

const Card: React.FC<CardProps> = ({ children, theme, ...props }) => {
  return (
    <div {...props} className={styles[`card${theme}`]}>
      {children}
    </div>
  );
};

export default Card;
