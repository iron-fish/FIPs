import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { HStack } from "../../../index";
import { ComponentProps, useMemo } from "react";
import type { NavItems } from "./types";

type Props = {
  content?: NavItems;
  sticky?: boolean;
};

export const NAV_HEIGHT = "80px";

export function NavBar({ content, sticky }: Props) {
  const positionProps = useMemo<ComponentProps<typeof Flex>>(() => {
    if (sticky) {
      return {
        position: "sticky",
        top: 0,
      };
    }

    return {
      position: "relative",
    };
  }, [sticky]);
  return (
    <Flex
      as="nav"
      bg="white"
      h={NAV_HEIGHT}
      px={6}
      borderBottom="1.5px solid black"
      justify="space-between"
      alignItems="stretch"
      zIndex={2}
      color="gray.800"
      {...positionProps}
    >
      <HStack alignItems="center">
        <Link href="/">
          <Image
            width={204}
            height={22}
            src="/images/logo.svg"
            alt="Iron Fish"
          />
        </Link>
      </HStack>
    </Flex>
  );
}
