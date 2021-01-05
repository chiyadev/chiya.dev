import React, { memo, useState } from "react";
import { DarkMode, Icon, Link, Tooltip, Wrap, WrapItem } from "@chakra-ui/react";
import { FaDiscord, FaEnvelope, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const LinkList = () => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <Wrap
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      color="white"
      spacing={4}
      px={12}
      py={8}
      justify="flex-end"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      opacity={hover || focus ? 1 : 0.5}
      transition="all 0.15s ease-out"
    >
      <IconLink icon={FaGithub} name="GitHub" href="https://github.com/chiyadev" />
      <IconLink icon={FaTwitter} name="Twitter" href="https://twitter.com/phosphene47" />
      <IconLink icon={FaTwitch} name="Twitch" href="https://twitch.tv/phosphene47" />
      <IconLink icon={FaDiscord} name="phosphene47#1293" href="https://discordapp.com/channels/@me" />
      <IconLink icon={FaEnvelope} name="Email" href="mailto:phosphene47@chiya.dev" />
    </Wrap>
  );
};

const IconLink = ({ icon, name, href }: { icon: any; name: string; href: string }) => {
  return (
    <WrapItem>
      <DarkMode>
        <Tooltip label={name}>
          <Link href={href}>
            <Icon as={icon} fontSize="2xl" />
          </Link>
        </Tooltip>
      </DarkMode>
    </WrapItem>
  );
};

export default memo(LinkList);
