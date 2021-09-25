import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Source Serif Pro",
    body: "Questrial",
  },
  styles: { global: { body: { bg: "background" } } },
});

export default theme;
