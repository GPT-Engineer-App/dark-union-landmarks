import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4} color="white">
    <VStack spacing={4} align="start">
      <Heading>Contact Us</Heading>
      <Text>If you have any questions or suggestions, feel free to reach out to us at contact@sovietsights.com.</Text>
    </VStack>
  </Box>
);

export default Contact;