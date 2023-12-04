import divider from "../../assets/images/divider.svg";

import { Box, Center, Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Center
      minH="30vh"
      bg="purple.500"
      mt="2.5rem"
      gap="1.5rem"
      flexDir="column"
      p="2rem"
    >
      <Link
        fontSize="sm"
        color="whiteAlpha.900"
        cursor="pointer"
        href="#start"
        fontWeight="bold"
      >
        Giovana Silva's Portfolio
      </Link>

      <Box>
        <Image src={divider} />
      </Box>

      <Flex
        gap={"2rem"}
        flexDir={["column", "column", "row"]}
        alignItems={"center"}
      >
        <Link
          fontSize="sm"
          id="aboutMe"
          href="#aboutMe"
          color="whiteAlpha.900"
          cursor="pointer"
        >
          Sobre mim
        </Link>

        <Link
          fontSize="sm"
          href="#projects"
          color="whiteAlpha.900"
          cursor="pointer"
        >
          Projetos
        </Link>

        <Link
          fontSize="sm"
          href="#services"
          color="whiteAlpha.900"
          cursor="pointer"
        >
          Serviços
        </Link>

        <Link
          fontSize="sm"
          href="#contact"
          color="whiteAlpha.900"
          cursor="pointer"
        >
          Contato
        </Link>
      </Flex>
    </Center>
  );
}
