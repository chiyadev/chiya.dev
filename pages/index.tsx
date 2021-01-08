import React, { memo } from "react";
import Layout from "../components/Layout";
import { chakra } from "@chakra-ui/react";
import LogoText from "../components/Home/LogoText";
import LinkList from "../components/Home/LinkList";
import CreditText from "../components/Home/CreditText";
import ParallaxBackground from "../components/ParallaxBackground";

const Home = () => {
  return (
    <Layout title="chiya.dev">
      <chakra.div position="relative" h="100vh" overflow="hidden">
        <chakra.div pointerEvents="none">
          <ParallaxBackground />

          <chakra.div
            position="absolute"
            bottom={0}
            w="full"
            h="sm"
            bg="linear-gradient(transparent, rgba(0, 0, 0, 0.5))"
          />

          <LogoText />
        </chakra.div>

        <LinkList />
        <CreditText />
      </chakra.div>
    </Layout>
  );
};

export default memo(Home);
