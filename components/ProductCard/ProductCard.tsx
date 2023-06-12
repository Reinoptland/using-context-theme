import { Theme } from "@/entities/theme";
import Button from "../atoms/Button";
import Card from "../atoms/Card";

interface ProductCardProps {
  buttonText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ buttonText }) => {
  return (
    <Card>
      <Button>{buttonText}</Button>
    </Card>
  );
};

export default ProductCard;
