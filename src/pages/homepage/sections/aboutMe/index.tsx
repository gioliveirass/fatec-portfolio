import SmallCard from "../../../../components/smallCard";

import { skills } from "./constants";
import { HiPlus } from "react-icons/hi";
import { Center, Text, VStack, Icon, HStack } from "@chakra-ui/react";

export default function Projects() {
  return (
    <Center h="90vh" bg="whiteAlpha.900" flexDir="column" gap="2rem">
      <VStack spacing="1rem">
        <Icon color="blackAlpha.900" boxSize="1.5rem" as={HiPlus} />
        <Text variant="sectionTitle">Sobre mim</Text>
      </VStack>

      <Text variant="sectionBody" maxW="30rem">
        Me chamo Giovana Silva e atuo como Front-end Developer a mais de um ano.
        Não tenho medo de desafios e busco sempre ser transparente e proativa
        nos times que atuo. Aprendo rápido e de forma continua.
      </Text>

      <HStack spacing="1rem">
        {skills.map((skill) => (
          <SmallCard
            key={skill.id}
            icon={skill.icon}
            text={skill.text}
            reverseColors={skill.reverseColors}
            link={skill.link}
          />
        ))}
      </HStack>
    </Center>
  );
}
