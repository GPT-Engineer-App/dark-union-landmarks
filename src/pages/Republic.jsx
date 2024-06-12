import { Box, Text, Heading, VStack, Select } from "@chakra-ui/react";
import { useState } from "react";

const Republic = ({ name, facts, sights }) => {
  const [filter, setFilter] = useState("all");

  const filteredSights = sights.filter(sight => filter === "all" || sight.category === filter);

  return (
    <Box p={4} color="white">
      <VStack spacing={4} align="start">
        <Heading>{name}</Heading>
        <Text>{facts}</Text>
        <Select placeholder="Filter by category" onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="statues">Statues</option>
          <option value="buildings">Buildings</option>
          <option value="parks">Parks</option>
        </Select>
        <VStack spacing={2} align="start">
          {filteredSights.map((sight, index) => (
            <Box key={index} p={2} borderWidth="1px" borderRadius="lg">
              <Text fontWeight="bold">{sight.name}</Text>
              <Text>{sight.description}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Republic;