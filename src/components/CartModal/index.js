import { useContext } from "react";
import { Box, Button, Image, Text, Heading } from "@chakra-ui/react";
import BaseModal from "components/BaseModal";
import { CartContext, DELETE } from "hooks/useCartReducer";
import { formatNumber } from "utils/common";

const CartModal = ({ isOpen, hideModal }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      hideModal={hideModal}
      Title="My Cart"
      Content={<CartModalBody />}
    />
  );
};

const CartModalBody = () => {
  const cartContext = useContext(CartContext);
  const { cart, dispatchCart } = cartContext;

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="4rem"
    >
      {Object.keys(cartContext.cart).map((key) => (
        <CartItem
          key={key}
          itemKey={key}
          name={cart[key].name}
          price={cart[key].price}
          count={cart[key].count}
          imageURL={cart[key].imageFileName}
          dispatchCart={dispatchCart}
        />
      ))}
    </Box>
  );
};

const CartItem = ({ imageURL, itemKey, name, price, count, dispatchCart }) => {
  return (
    <Box
      margin="4"
      padding="4"
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      {imageURL && (
        <Image
          boxSize="200px"
          src={require(`assets/images/${imageURL}`).default}
          alt="Matress Picture"
        />
      )}
      <Box
        flex="1"
        height="200px"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="flex-end"
      >
        <Heading as="h4" fontWeight="medium">
          {name}
        </Heading>
        <Text size="md">Price: {formatNumber(price)}</Text>
        <Text size="md">Count: {count}</Text>
        <Button
          color="white"
          backgroundColor="primary"
          onClick={() =>
            dispatchCart({ type: DELETE, payload: { key: itemKey } })
          }
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default CartModal;
