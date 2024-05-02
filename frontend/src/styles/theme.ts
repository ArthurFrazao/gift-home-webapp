import { extendTheme } from "@chakra-ui/react";

// const base = {
//   root: {
//     font-synthesis: none;
//     text-rendering: optimizeLegibility;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
// }

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f9f9f9",
        fontFamily: "Figtree",
      },
    },
  },
});
