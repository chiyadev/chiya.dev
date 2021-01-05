import React, { memo } from "react";
import Layout from "../components/Layout";
import Background from "../assets/bg.jpg";
import { chakra } from "@chakra-ui/react";
import LogoText from "../components/Home/LogoText";
import LinkList from "../components/Home/LinkList";
import CreditText from "../components/Home/CreditText";

const Home = () => {
  return (
    <Layout title="chiya.dev">
      <chakra.div position="relative" minH="100vh" bg={`url(${Background}) center center / cover`}>
        <chakra.div
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="sm"
          bg="linear-gradient(transparent, rgba(0, 0, 0, 0.5))"
          pointerEvents="none"
        />

        <LogoText />
        <LinkList />
        <CreditText />
      </chakra.div>
    </Layout>
  );
};

export default memo(Home);
