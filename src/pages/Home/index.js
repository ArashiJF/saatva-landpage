import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import MattressSection from "components/MattressSection";
import NavBar from "components/Nav";
import useCartReducer, { CartContext } from "hooks/useCartReducer";

const instance = axios.create({
  baseURL: "/",
});

const cleanUtil = (resObj, resArr) => {
  const keys = Object.keys(resObj);
  let aux = {};

  keys.forEach((key) => {
    const item = resArr.filter((item) => item.productKey === key)[0];
    aux = {
      ...aux,
      [key]: {
        ...resObj[key],
        name: item.label,
        thumbnail: item.thumbnail,
        imageFileName: item.imageFileName,
      },
    };
  });

  return aux;
};

const Home = () => {
  const [mattresses, setMatresses] = useState(null);
  const [cart, dispatch] = useCartReducer();

  useEffect(() => {
    const getMatresses = async () => {
      try {
        const res = await instance.get("api/mattress-data");
        const cleanedObj = cleanUtil(res.data[0].mattresses, res.data[1]);
        setMatresses({ ...cleanedObj });
      } catch (e) {
        console.error("Oops", e);
      }
    };

    getMatresses();
  }, []);

  return (
    <Box height="100vh" minWidth="400px" display="flex" flexDirection="column">
      <CartContext.Provider value={{ cart: cart, dispatchCart: dispatch }}>
        <NavBar />
        <Box flex="1" width="100%">
          {mattresses && <MattressSection mattresses={mattresses} />}
        </Box>
      </CartContext.Provider>
    </Box>
  );
};

export default Home;
