import LargeCard from "../../../../components/largeCard";

import { services } from "./constants";
import { Center, Flex, Text } from "@chakra-ui/react";

export default function Services() {
  return (
    <Center
      minH="90vh"
      bg="whiteAlpha.900"
      flexDir="column"
      gap="2rem"
      id="services"
      p="2rem"
    >
      <Text variant="sectionTitle">Serviços</Text>

      <Flex gap={"1.5rem"} flexDir={"column"}>
        {services.map((service) => (
          <LargeCard
            key={service.id}
            image={service.image}
            text={service.text}
            title={service.title}
          />
        ))}
      </Flex>
    </Center>
  );
}
