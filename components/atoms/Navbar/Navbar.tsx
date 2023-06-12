import { Theme } from "@/entities/theme";
import styles from "./Navbar.module.css";

interface NavbarProps extends React.ComponentPropsWithRef<"nav"> {
  // add more props
  theme: Theme;
}

const Navbar: React.FC<NavbarProps> = ({ children, theme, ...props }) => {
  return (
    <nav
      {...props}
      className={` ${styles[`navbar${theme}`]} ${styles.navbar} `}
    >
      {children}
    </nav>
  );
};

export default Navbar;
