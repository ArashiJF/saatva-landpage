import { Box } from "@chakra-ui/react";

const MattressSection = () => {
  return (
    <Box display="flex" flexDirection={{ sm: "column", md: "row" }}>
      <Box>Image</Box>
      <Box>Button selects and such</Box>
    </Box>
  );
};

export default MattressSection;
