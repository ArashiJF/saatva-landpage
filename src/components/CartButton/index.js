import { useEffect, useState, useContext } from "react";
import { IconButton, Box, Badge, useDisclosure } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "components/CartModal";
import { CartContext } from "hooks/useCartReducer";

const CartButton = () => {
  const cartContext = useContext(CartContext);
  const [itemCount, setCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const { cart } = cartContext;
    let auxCount = 0;
    for (let key in cart) {
      auxCount += cart[key].count;
    }
    setCount(auxCount);
  }, [cartContext, cartContext.cart]);

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
      {isOpen && <CartModal isOpen={isOpen} hideModal={onClose} />}
    </>
  );
};

export default CartButton;
