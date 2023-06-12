import { Theme } from "@/entities/theme";
import styles from "./Navbar.module.css";
import { useTheme } from "@/contexts/ThemeContext";

interface NavbarProps extends React.ComponentPropsWithRef<"nav"> {}

const Navbar: React.FC<NavbarProps> = ({ children, ...props }) => {
  const { theme } = useTheme();
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
