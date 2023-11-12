import LargeCardProps from "./props";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Text, Image, Card, Badge } from "@chakra-ui/react";

export default function LargeCard({ image, text, title }: LargeCardProps) {
  return (
    <ChakraProvider>
      <Card w="52rem" minH="13rem" flexDir="row" justifyContent="space-between">
        <Flex p="2rem" gap="1.5rem" flexDirection={"column"}>
          <Text>
            <Badge colorScheme="purple" variant="subtle">
              {title}
            </Badge>
          </Text>

          <Text>{text}</Text>
        </Flex>

        <Image w="50%" h="100%" src={image} />
      </Card>
    </ChakraProvider>
  );
}
