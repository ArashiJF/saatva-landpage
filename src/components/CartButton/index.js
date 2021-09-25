import { IconButton } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = () => {
  const handleClick = () => {
    window.alert("Open cart");
  };
  return (
    <IconButton
      aria-label="Open cart"
      fontSize="3xl"
      color="gray"
      icon={<AiOutlineShoppingCart />}
      onClick={handleClick}
    />
  );
};

export default CartButton;
