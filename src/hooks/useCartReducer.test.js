import { ADD, DELETE, cartReducer } from "./useCartReducer";

const initialKey = "classic";
const initialItem = {
  name: "Saatva Classic",
  price: 999,
  reviewRating: 4.9,
  imageFileName: "classic-carousel.jpg",
};

it("Add to empty cart", () => {
  const expected = {
    [initialKey]: {
      ...initialItem,
      count: 1,
    },
  };
  const updateAction = {
    type: ADD,
    payload: { mattress: { ...initialItem }, key: initialKey },
  };
  const updatedState = cartReducer({}, updateAction);
  expect(updatedState).toEqual(expected);
});

it("Add to existing item in cart", () => {
  const expected = {
    [initialKey]: {
      ...initialItem,
      count: 2,
    },
  };
  const updateAction = {
    type: ADD,
    payload: { mattress: { ...initialItem }, key: initialKey },
  };
  const updatedState = cartReducer(
    {
      ...expected,
      [initialKey]: { ...expected[initialKey], count: 1 },
    },
    updateAction
  );
  expect(updatedState).toEqual(expected);
});

it("Remove last item from cart", () => {
  const expected = {};
  const updateAction = {
    type: DELETE,
    payload: { key: initialKey },
  };
  const updatedState = cartReducer(
    {
      [initialKey]: {
        ...initialItem,
        count: 1,
      },
    },
    updateAction
  );
  expect(updatedState).toEqual(expected);
});

it("Remove one count from an existing item in cart", () => {
  const expected = {
    [initialKey]: {
      ...initialItem,
      count: 1,
    },
  };
  const updateAction = {
    type: DELETE,
    payload: { key: initialKey },
  };
  const updatedState = cartReducer(
    {
      [initialKey]: {
        ...initialItem,
        count: 2,
      },
    },
    updateAction
  );
  expect(updatedState).toEqual(expected);
});
