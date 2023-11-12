import LargeCard from "../../../../components/largeCard";

import { services } from "./constants";
import { Center, Text, VStack } from "@chakra-ui/react";

export default function Services() {
  return (
    <Center h="90vh" bg="whiteAlpha.900" flexDir="column" gap="2rem">
      <Text variant="sectionTitle">Serviços</Text>

      <VStack spacing={"1.5rem"}>
        {services.map((service) => (
          <LargeCard
            key={service.id}
            image={service.image}
            text={service.text}
            title={service.title}
          />
        ))}
      </VStack>
    </Center>
  );
}
