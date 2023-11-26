import Carousel from "../../../../components/carousel";

import { cards } from "./constants";
import { Center, Text } from "@chakra-ui/react";

export default function Projects() {
  return (
    <Center
      minH="90vh"
      bg="whiteAlpha.900"
      flexDir="column"
      gap="2rem"
      id="projects"
    >
      <Text variant="sectionTitle">Projetos</Text>

      <Carousel width="60%" cards={cards} />
    </Center>
  );
}
