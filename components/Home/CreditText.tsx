import React, { memo } from "react";
import { Link } from "@chakra-ui/react";

const CreditText = () => {
  return (
    <Link
      href="https://twitter.com/dar_nell_/status/1319959982977110016"
      isExternal
      position="absolute"
      right={12}
      bottom={2}
      color="blue.300"
      fontSize={10}
      opacity={0.5}
    >
      Credit
    </Link>
  );
};

export default memo(CreditText);
