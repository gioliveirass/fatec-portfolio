import SmallCardProps from "./props";

import divider from "../../assets/images/divider.svg";
import dividerPurple from "../../assets/images/divider-purple.svg";

import { FiExternalLink } from "react-icons/fi";
import { Center, Text, Image, Icon, Link } from "@chakra-ui/react";

export default function SmallCard({
  icon,
  text,
  link,
  reverseColors,
}: SmallCardProps) {
  const getBackgroundColor = () => {
    if (reverseColors) return "purple.500";
    return "whiteAlpha.900";
  };

  const getIconColor = () => {
    if (reverseColors) return "whiteAlpha.900";
    return "purple.500";
  };

  const getTextColor = () => {
    if (reverseColors) return "whiteAlpha.900";
    return "blackAlpha.900";
  };

  const getDividerImage = () => {
    if (reverseColors) return divider;
    return dividerPurple;
  };

  return (
    <Center
      w="13rem"
      h="10rem"
      flexDir="column"
      gap="1.5rem"
      borderRadius="8px"
      bg={getBackgroundColor()}
    >
      <Icon boxSize="1.5rem" color={getIconColor()} as={icon} />

      <Image src={getDividerImage()} />

      {!link && (
        <Text variant="sectionBody" color={getTextColor()} as="b">
          {text}
        </Text>
      )}

      {link && (
        <Link href={link} color={getTextColor()} isExternal>
          {text} <Icon as={FiExternalLink} />
        </Link>
      )}
    </Center>
  );
}
