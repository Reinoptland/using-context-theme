import styles from "./Card.module.css";
import { useTheme } from "@/pages";

interface CardProps extends React.ComponentPropsWithRef<"div"> {}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  const { theme } = useTheme();
  return (
    <div {...props} className={styles[`card${theme}`]}>
      {children}
    </div>
  );
};

export default Card;
