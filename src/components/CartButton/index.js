import { useEffect, useState } from "react";
import { IconButton, Box, Badge } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = ({ cart }) => {
  const [itemCount, setCount] = useState(0);

  useEffect(() => {
    let auxCount = 0;
    for (let key in cart) {
      auxCount += cart[key].count;
    }
    setCount(auxCount);
  }, [cart]);

  const handleClick = () => {
    window.alert(`you have bought: ${itemCount}`);
  };

  return (
    <Box position="relative">
      <IconButton
        aria-label="Open cart"
        fontSize="3xl"
        color="gray"
        icon={<AiOutlineShoppingCart />}
        onClick={handleClick}
      />
      <Box position="absolute" top="0" right="0">
        <Badge
          variant="solid"
          color="white"
          backgroundColor="primary"
          borderRadius="full"
          fontSize="smaller"
        >
          {itemCount}
        </Badge>
      </Box>
    </Box>
  );
};

export default CartButton;
