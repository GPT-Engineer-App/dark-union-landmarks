import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white">
      <VStack spacing={4}>
        <Heading>Soviet Sights</Heading>
        <Text fontSize="xl">Explore the historical sights of the former Soviet Union.</Text>
      </VStack>
    </Container>
  );
};

export default Index;