import { Theme } from "@/entities/theme";
import Button from "../atoms/Button";
import Card from "../atoms/Card";

interface ProductCardProps {
  theme: Theme;
  buttonText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ theme, buttonText }) => {
  return (
    <Card theme={theme}>
      <Button>{buttonText}</Button>
    </Card>
  );
};

export default ProductCard;
