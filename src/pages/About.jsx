import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4} color="white">
    <VStack spacing={4} align="start">
      <Heading>About Soviet Sights</Heading>
      <Text>
        This website showcases various sights from the former Soviet Union. Explore the rich history and culture through monuments, buildings, and other significant landmarks.
      </Text>
    </VStack>
  </Box>
);

export default About;