import { chakra, useToken } from "@chakra-ui/react";
import React, { memo } from "react";
import styles from "./LogoText.module.css";

const LogoText = () => {
  const [gray] = useToken("colors", ["gray.700"]);

  return (
    <chakra.div
      className={styles.container}
      position="absolute"
      bottom={0}
      left={0}
      px={12}
      py={8}
      pointerEvents="none"
      color="white"
      textAlign="center"
      fontWeight="bold"
      fontFamily="Monallesia Script"
      textShadow={`-1px -1px 0 ${gray}, 1px -1px 0 ${gray}, -1px 1px 0 ${gray}, 1px 1px 0 ${gray}`}
    >
      <chakra.span whiteSpace="pre">chiya</chakra.span>
      <chakra.span whiteSpace="pre">.dev</chakra.span>
    </chakra.div>
  );
};

export default memo(LogoText);
