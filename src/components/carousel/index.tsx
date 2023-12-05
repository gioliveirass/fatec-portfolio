import React from "react";
import Slider from "react-slick";
import CarouselProps from "./props";

import { FiExternalLink } from "react-icons/fi";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Container,
  Center,
  Link,
  Icon,
  Avatar,
} from "@chakra-ui/react";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ cards, width }: CarouselProps) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box position={"relative"} maxH={"465px"} width={width} overflow={"hidden"}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card) => (
          <Box
            key={card.id}
            height={"6xl"}
            position="relative"
            bg="whiteAlpha.900"
          >
            <Container
              size="container.lg"
              height="25rem"
              position="relative"
              zIndex={"100"}
            >
              <Center>
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                  alignItems="center"
                >
                  <Avatar boxSize="3.5rem" src={card.avatar} />

                  <Text variant="sectionBody">{card.text}</Text>

                  <Link
                    fontWeight="bold"
                    href={card.link}
                    isExternal
                    color="blackAlpha.900"
                    textAlign="center"
                  >
                    Saiba mais <Icon as={FiExternalLink} />
                  </Link>
                </Stack>
              </Center>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
