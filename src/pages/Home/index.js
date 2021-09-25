import { Box } from "@chakra-ui/react";
import MattressSection from "components/MattressSection";
import NavBar from "components/Nav";
import mattresses from "api/mattresses";

const Home = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <NavBar />
      <Box flex="1" width="100%" backgroundColor="background">
        <MattressSection mattresses={mattresses.mattresses} />
      </Box>
    </Box>
  );
};

export default Home;
