import divider from "../../../../assets/images/divider.svg";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

import {
  Box,
  Center,
  Text,
  VStack,
  Image,
  HStack,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box h="90vh" bg="purple.500">
      <Center w="100%" h="70%" bg="white" color="blackAlpha.900">
        <VStack maxW="30rem" spacing="2rem">
          <Text fontSize="xl" as="b">
            Contato
          </Text>

          <Text fontSize="md" textAlign="center">
            Entre em contato comigo através dos e-mail ou, se preferir, me mande
            uma mensagem através do LinkedIn. Você pode conferir o código-fonte
            dos projetos no qual atuei no GitHub.
          </Text>

          <Flex w="100%" flexDir={"column"} gap="1rem">
            <HStack spacing={"0.5rem"}>
              <Icon as={HiOutlineMail} />
              <Text fontSize="md">giothais.os@gmail.com</Text>
            </HStack>

            <HStack spacing={"0.5rem"}>
              <Icon as={AiOutlineLinkedin} />
              <Text fontSize="md">gioliveirass</Text>
            </HStack>

            <HStack spacing={"0.5rem"}>
              <Icon as={AiFillGithub} />
              <Text fontSize="md">gioliveirass</Text>
            </HStack>
          </Flex>
        </VStack>
      </Center>

      <Center mt="2.5rem" gap="1.5rem" flexDir="column">
        <Text fontSize="sm" color="whiteAlpha.900" as="b">
          Giovana Silva's Portfolio
        </Text>

        <Box>
          <Image src={divider} />
        </Box>

        <HStack spacing={"2rem"}>
          <Link fontSize="sm" color="whiteAlpha.900" cursor="pointer">
            Sobre mim
          </Link>

          <Link fontSize="sm" color="whiteAlpha.900" cursor="pointer">
            Projetos
          </Link>

          <Link fontSize="sm" color="whiteAlpha.900" cursor="pointer">
            Serviços
          </Link>

          <Link fontSize="sm" color="whiteAlpha.900" cursor="pointer">
            Contato
          </Link>
        </HStack>
      </Center>
    </Box>
  );
}
