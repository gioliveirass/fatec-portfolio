import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

import { Center, Text, VStack, HStack, Icon, Flex } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Center minH="60vh" bg="whiteAlpha.900" id="contact" p="2rem">
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
  );
}
