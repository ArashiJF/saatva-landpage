import { Box, Heading } from "@chakra-ui/react";
import CartButton from "components/CartButton";

const NavBar = () => {
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
      boxShadow="0px 1px 1px black;"
      width="100%"
    >
      <NavSection>
        <Heading color="primary">saatva</Heading>
      </NavSection>
      <NavSection>
        <CartButton />
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
