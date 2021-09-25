import { useEffect, useState } from "react";
import { IconButton, Box, Badge, useDisclosure } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "components/CartModal";

const CartButton = ({ cart, dispatchCart }) => {
  const [itemCount, setCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let auxCount = 0;
    for (let key in cart) {
      auxCount += cart[key].count;
    }
    setCount(auxCount);
  }, [cart]);

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
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
      {isOpen && <CartModal cart={cart} dispatchCart={dispatchCart} isOpen={isOpen} hideModal={onClose} />}
    </>
  );
};

export default CartButton;
