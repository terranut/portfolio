import React, { ReactNode, useEffect } from "react";
import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FcVideoCall } from "react-icons/fc";
import { Flex, Text } from "@chakra-ui/layout";

type Props = {
  url: string;
  text?: string;
  icon?: ReactNode;
};

const ButtonLink = ({ text = "Text button", url = "", icon = <FcVideoCall /> }: Props) => {
  return (
    <Link href={url} fontSize="12px" isExternal>
      <Button w="100%">
        <Flex alignItems="center">
          <Text mr="2" fontSize="10px">
            {text}
          </Text>
          {icon}
        </Flex>
      </Button>
    </Link>
  );
};

export default ButtonLink;
