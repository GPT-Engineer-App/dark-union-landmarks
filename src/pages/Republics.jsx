import { Box, VStack } from "@chakra-ui/react";
import Republic from "./Republic";

const republicsData = [
  {
    name: "Moldova",
    facts: "Moldova is a landlocked country in Eastern Europe, known for its wine regions and Soviet-era architecture.",
    sights: [
      { name: "Statue of Lenin", category: "statues", description: "A prominent statue of Lenin in the capital city." },
      { name: "Parliament Building", category: "buildings", description: "The main government building from the Soviet era." },
      { name: "Central Park", category: "parks", description: "A large park in the center of the capital." }
    ]
  },
  // Add more republics here
];

const Republics = () => (
  <Box p={4} color="white">
    <VStack spacing={8}>
      {republicsData.map((republic, index) => (
        <Republic key={index} name={republic.name} facts={republic.facts} sights={republic.sights} />
      ))}
    </VStack>
  </Box>
);

export default Republics;