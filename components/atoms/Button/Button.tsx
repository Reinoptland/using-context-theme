import { Theme } from "@/entities/theme";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  // add more props
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
