import { useContext, useEffect, useState } from "react";
import { Box, Image, Heading, Button, Text, useToast } from "@chakra-ui/react";
import { formatNumber } from "utils/common";
import { CartContext, ADD } from "hooks/useCartReducer";

const MattressSection = ({ mattresses }) => {
  const cartContext = useContext(CartContext);
  const [selectedMattress, setSelectedMattress] = useState("");
  const toast = useToast();

  useEffect(() => {
    const keys = Object.keys(mattresses);
    setSelectedMattress(keys[0]);
    // eslint-disable-next-line
  }, []);

  const changeMattress = (key) => {
    setSelectedMattress(key);
  };

  const addToCart = () => {
    try {
      cartContext.dispatchCart({
        type: ADD,
        payload: {
          mattress: { ...mattresses[selectedMattress] },
          key: selectedMattress,
        },
      });
      toast({
        title: "Add to cart",
        description: `Added ${mattresses[selectedMattress].name} mattress to cart`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
      toast({
        title: "Oops",
        description: "Something went wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={{ base: "flex-start", lg: "center" }}
      alignItems="center"
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
        <Heading fontWeight="medium">Choose Your Mattress</Heading>
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
                <Text
                  fontSize="xs"
                  dangerouslySetInnerHTML={{ __html: mattresses[key].name }}
                ></Text>
              </Button>
            );
          })}
        </Box>
        <Box
          display="flex"
          width={{ base: "100%", lg: "50%" }}
          marginTop="12"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            fontSize="md"
            fontWeight="bold"
            dangerouslySetInnerHTML={{
              __html: mattresses[selectedMattress]?.name,
            }}
          ></Text>
          <Text>{formatNumber(mattresses[selectedMattress]?.price)}</Text>
        </Box>
        <Box
          display="flex"
          width={{ base: "100%", lg: "50%" }}
          marginTop="12"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            flex="1"
            borderRadius="0"
            backgroundColor="primary"
            color="white"
            onClick={addToCart}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MattressSection;
