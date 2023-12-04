import { RxHamburgerMenu } from "react-icons/rx";

import {
  Center,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <>
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
        display={["none", "none", "flex"]}
      >
        <Link cursor="pointer" href="#aboutMe" _hover={{ fontWeight: "bold" }}>
          + Sobre mim
        </Link>

        <Link cursor="pointer" href="#projects" _hover={{ fontWeight: "bold" }}>
          Projetos
        </Link>

        <Link cursor="pointer" href="#start" fontWeight="bold">
          Giovana Silva's Portfolio
        </Link>

        <Link cursor="pointer" href="#services" _hover={{ fontWeight: "bold" }}>
          Serviços
        </Link>

        <Link cursor="pointer" href="#contact" _hover={{ fontWeight: "bold" }}>
          Contato
        </Link>
      </Center>

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
        display={["flex", "flex", "none"]}
        justifyContent={"space-between"}
      >
        <Link cursor="pointer" href="#start" fontWeight="bold">
          Giovana Silva's Portfolio
        </Link>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<RxHamburgerMenu />}
            variant="outline"
          />
          <MenuList
            bg="whiteAlpha.900"
            color="blackAlpha.900"
            p="1rem"
            gap="0.5rem"
            display="flex"
            flexDir={"column"}
            borderRadius={"8px"}
          >
            <MenuItem>
              <Link
                cursor="pointer"
                href="#aboutMe"
                _hover={{ fontWeight: "bold" }}
              >
                + Sobre mim
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                cursor="pointer"
                href="#projects"
                _hover={{ fontWeight: "bold" }}
              >
                Projetos
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                cursor="pointer"
                href="#services"
                _hover={{ fontWeight: "bold" }}
              >
                Serviços
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                cursor="pointer"
                href="#contact"
                _hover={{ fontWeight: "bold" }}
              >
                Contato
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </>
  );
}
