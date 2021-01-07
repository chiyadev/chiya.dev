import React, { memo } from "react";
import Layout from "../components/Layout";
import Background from "../assets/bg.jpg";
import { chakra } from "@chakra-ui/react";
import LogoText from "../components/Home/LogoText";
import LinkList from "../components/Home/LinkList";
import CreditText from "../components/Home/CreditText";
import Snowfall from "../components/Snowfall";
import { useWindowSize } from "../utils/hooks";

const Home = () => {
  const [width] = useWindowSize() || [0];
  console.log("width", width);

  return (
    <Layout title="chiya.dev">
      <chakra.div position="relative" minH="100vh" bg={`url(${Background}) center center / cover`}>
        <Snowfall
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          pointerEvents="none"
          snowflakeCount={width * 0.15}
        />

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
