import { Box } from "@chakra-ui/react";
import CartButton from "components/CartButton";
import Logo from "components/Logo";

const NavBar = ({ cart, dispatchCart }) => {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingRight="8"
      paddingLeft="4"
      minHeight="16"
      borderBottomWidth="1px"
      borderBottomColor="gray"
      boxShadow="0px 0.5px 0px gray;"
      width="100%"
    >
      <NavSection>
        <Logo height="38" width="180" color="primary" />
      </NavSection>
      <NavSection>
        <CartButton cart={cart} dispatchCart={dispatchCart} />
      </NavSection>
    </Box>
  );
};

const NavSection = ({ children }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
};

export default NavBar;
