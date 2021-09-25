import { useEffect, useState } from "react";
import { Box, Image, Heading, VStack, Button, Text } from "@chakra-ui/react";

const MattressSection = ({ mattresses }) => {
  const [selectedMattress, setSelectedMattress] = useState("");

  useEffect(() => {
    const keys = Object.keys(mattresses);
    setSelectedMattress(keys[0]);
    // eslint-disable-next-line
  }, []);

  const changeMattress = (key) => {
    setSelectedMattress(key);
  };

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={{ base: "flex-start", lg: "center" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      margin="0 auto"
      height="100%"
    >
      <Box
        display="flex"
        flex={{ base: 0, lg: "1 0 300px" }}
        justifyContent="center"
        alignItems={{ base: "flex-start", lg: "flex-end" }}
        padding="4"
      >
        {selectedMattress && (
          <Image
            src={
              require(`assets/images/${mattresses[selectedMattress]?.imageFileName}`)
                .default
            }
            alt="Matress Picture"
          />
        )}
      </Box>

      <Box
        flex="1 1 300px"
        justifyContent="center"
        alignItems={{ base: "flex-start", lg: "flex-end" }}
        padding="4"
      >
        <Heading>Choose Your Mattress</Heading>
        <Box marginTop="12">
          <Text fontSize="lg">SELECT MATTRESS TYPE</Text>
        </Box>
        <Box
          display="flex"
          marginTop="4"
          width={{ base: "100%", lg: "400px" }}
          justifyContent="center"
          alignItems="center"
        >
          {Object.keys(mattresses).map((key) => {
            return (
              <Button
                flex="1"
                key={key}
                fontSize="md"
                borderColor="gray"
                borderWidth="1px"
                borderRadius="0"
                height="12"
                onClick={() => changeMattress(key)}
                backgroundColor={key === selectedMattress ? "gray" : "white"}
                color={key === selectedMattress ? "white" : "gray"}
              >
                {mattresses[key].name}
              </Button>
            );
          })}
        </Box>
        <Box
          display="flex"
          width={{ base: "100%", lg: "400px" }}
          marginTop="12"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="md" fontWeight="bold">
            {mattresses[selectedMattress].name} Mattress
          </Text>
          <Text>${mattresses[selectedMattress].price}</Text>
        </Box>
        <Box
          display="flex"
          width={{ base: "100%", lg: "400px" }}
          marginTop="12"
          justifyContent="space-between"
          alignItems="center"
        >
            <Button flex="1" borderRadius="0" backgroundColor="primary" color="white">
                Add to Cart
            </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MattressSection;
