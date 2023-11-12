import { Center, Link, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Center
      bg="purple.500"
      w="100%"
      p="2rem"
      color="whiteAlpha.900"
      fontSize="sm"
      position="sticky"
      top="0"
      gap="3rem"
      zIndex={999}
    >
      <Link cursor="pointer" _hover={{ fontWeight: "bold" }}>
        + Sobre mim
      </Link>

      <Link cursor="pointer" _hover={{ fontWeight: "bold" }}>
        Projetos
      </Link>

      <Text as="b" cursor="default">
        Giovana Silva's Portfolio
      </Text>

      <Link cursor="pointer" _hover={{ fontWeight: "bold" }}>
        Serviços
      </Link>

      <Link cursor="pointer" _hover={{ fontWeight: "bold" }}>
        Contato
      </Link>
    </Center>
  );
}
