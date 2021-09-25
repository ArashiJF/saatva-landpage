import { Box } from "@chakra-ui/react";
import MattressSection from "components/MattressSection";
import NavBar from "components/Nav";
import mattresses from "api/mattresses";
import { useReducer } from "react";

export const ADD = "ADD";
export const DELETE = "DELETE";

function cartReducer(state, action) {
  switch (action.type) {
    case ADD: {
      const { key, mattress } = action.payload;
      const currentKeys = Object.keys(state);
      // If its not already in then just add it directly and raise counter!
      if (currentKeys.filter(currentKey => currentKey === key).length <= 0) {
        return { ...state, [key]: { ...mattress, count: 1 } };
      } else {
        // If its already in then we update that mattress count in the cart
        return {
          ...state,
          [key]: { ...state[key], count: state[key].count + 1 },
        };
      }
    }
    case DELETE: {
      const { key } = action.payload;
      const currentKeys = Object.keys(state);

      // If it does not exist do not do nothing
      if (!currentKeys[key]) return;

      const currentCount = state[key].count;

      if (currentCount === 1) {
        delete state[key];
        return { ...state };
      }

      return {
        ...state,
        [key]: { ...state[key], count: state[key].count - 1 },
      };
    }
    default:
      throw new Error("What are you doing?");
  }
}

const Home = () => {
  const [cart, dispatch] = useReducer(cartReducer, {});

  return (
    <Box height="100vh" minWidth="400px" display="flex" flexDirection="column">
      <NavBar cart={cart} />
      <Box flex="1" width="100%">
        <MattressSection
          mattresses={mattresses.mattresses}
          dispatchCart={dispatch}
        />
      </Box>
    </Box>
  );
};

export default Home;
