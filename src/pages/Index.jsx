import { Container, VStack, Heading, Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { FaClock, FaTasks, FaImage } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={4}>
          ADHD Management Dashboard
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Track your time, manage tasks, and review screenshots to stay focused and productive.
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" h="10" bg="blue.500" borderRadius="md" p={4} color="white">
            <Box display="flex" alignItems="center">
              <FaClock size="24px" />
              <Heading as="h2" size="md" ml={2}>
                Time Tracking
              </Heading>
            </Box>
            <Text mt={2}>View and analyze your time tracking data.</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="green.500" borderRadius="md" p={4} color="white">
            <Box display="flex" alignItems="center">
              <FaTasks size="24px" />
              <Heading as="h2" size="md" ml={2}>
                Task Management
              </Heading>
            </Box>
            <Text mt={2}>Organize and prioritize your tasks.</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="purple.500" borderRadius="md" p={4} color="white">
            <Box display="flex" alignItems="center">
              <FaImage size="24px" />
              <Heading as="h2" size="md" ml={2}>
                Screenshots
              </Heading>
            </Box>
            <Text mt={2}>Review your activity screenshots.</Text>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;