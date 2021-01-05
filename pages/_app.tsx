import React, { memo } from "react";
import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "inter-ui/inter.css";

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const App = ({ Component }: AppProps) => {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          body: `inter, ${fallbackFonts}`,
          heading: `inter, ${fallbackFonts}`,
        },
      })}
    >
      <Component />
    </ChakraProvider>
  );
};

export default memo(App);
