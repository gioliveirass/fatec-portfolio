import divider from "../../../../assets/images/divider.svg";
import down from "../../../../assets/images/down.svg";

import { Box, Center, Text, VStack, Image } from "@chakra-ui/react";

export default function Start() {
  return (
    <Box h="90vh" bg="whiteAlpha.900">
      <Center w="100%" h="70%" bg="purple.500" color="whiteAlpha.900">
        <VStack maxW="30rem" spacing="2rem">
          <Text fontSize="xl" as="b">
            Front-end Developer
          </Text>

          <Box>
            <Image src={divider} />
          </Box>

          <Text fontSize="md" textAlign="center">
            Auxilio você a dar vida a sites maravilhosos, com navegação
            intuitiva, responsividade e muito carinho
          </Text>
        </VStack>
      </Center>

      <Center mt="2.5rem" gap="1.5rem" flexDir="column">
        <Text fontSize="md" textAlign="center" color="purple.500" as="b">
          Explore o portfólio!
        </Text>

        <Image src={down} />
      </Center>
    </Box>
  );
}
