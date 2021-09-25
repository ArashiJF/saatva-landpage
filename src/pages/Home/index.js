import { Box, Text } from "@chakra-ui/react";
import MattressSection from "components/MattressSection";
import NavBar from "components/Nav";

const Home = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <NavBar />
      <Box flex="1" width="100%" backgroundColor="background">
        <MattressSection />
      </Box>
    </Box>
  );
};

export default Home;
