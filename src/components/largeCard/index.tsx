import LargeCardProps from "./props";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Text, Image, Card, Badge } from "@chakra-ui/react";

export default function LargeCard({ image, text, title }: LargeCardProps) {
  return (
    <ChakraProvider>
      <Card
        maxW="52rem"
        minH="13rem"
        flexDir={["column", "column", "column", "row"]}
        justifyContent="space-between"
        margin="2rem"
      >
        <Flex p="2rem" gap="1.5rem" flexDirection={"column"}>
          <Text>
            <Badge colorScheme="purple" variant="subtle">
              {title}
            </Badge>
          </Text>

          <Text>{text}</Text>
        </Flex>

        <Image w={["100%", "100%", "100%", "50%"]} h="100%" src={image} />
      </Card>
    </ChakraProvider>
  );
}
