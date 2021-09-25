import { Box } from "@chakra-ui/react";
import MattressSection from "components/MattressSection";
import NavBar from "components/Nav";
import mattresses from "api/mattresses";
import useCartReducer, { CartContext } from "hooks/useCartReducer";

const Home = () => {
  const [cart, dispatch] = useCartReducer();

  return (
    <Box height="100vh" minWidth="400px" display="flex" flexDirection="column">
      <CartContext.Provider value={{ cart: cart, dispatchCart: dispatch }}>
        <NavBar />
        <Box flex="1" width="100%">
          <MattressSection mattresses={mattresses.mattresses} />
        </Box>
      </CartContext.Provider>
    </Box>
  );
};

export default Home;
