import { useState } from "react";
import { Container, VStack, Heading, Box, Text, Grid, GridItem, Flex, Switch, useColorMode, Input, Button, HStack } from "@chakra-ui/react";
import { FaClock, FaTasks, FaImage, FaProjectDiagram, FaDollarSign, FaBell, FaSearch } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="xl">
          ADHD Management Dashboard
        </Heading>
        <HStack spacing={4}>
          <Input
            placeholder="Search tasks or time entries"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button onClick={handleSearch}>
            <FaSearch />
          </Button>
          <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        </HStack>
      </Flex>
      <VStack spacing={8} align="stretch">
        <Text fontSize="lg" textAlign="center">
          Track your time, manage tasks, and review screenshots to stay focused and productive.
        </Text>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
          <GridItem w="100%" bg="blue.500" borderRadius="md" p={4} color="white">
            <Box display="flex" alignItems="center">
              <FaClock size="24px" />
              <Heading as="h2" size="md" ml={2}>
                Time Tracking
              </Heading>
            </Box>
            <Text mt={2}>View and analyze your time tracking data.</Text>
          </GridItem>
          <GridItem w="100%" bg="green.500" borderRadius="md" p={4} color="white">
            <Box display="flex" alignItems="center">
              <FaTasks size="24px" />
              <Heading as="h2" size="md" ml={2}>
                Task Management
              </Heading>
            </Box>
            <Text mt={2}>Organize and prioritize your tasks.</Text>
          </GridItem>
          <GridItem w="100%" bg="purple.500" borderRadius="md" p={4} color="white">
            <Box display="flex" alignItems="center">
              <FaImage size="24px" />
              <Heading as="h2" size="md" ml={2}>
                Screenshots
              </Heading>
            </Box>
            <Text mt={2}>Review your activity screenshots.</Text>
          </GridItem>
          <GridItem w="100%" bg="orange.500" borderRadius="md" p={4} color="white">
            <Box display="flex" alignItems="center">
              <FaProjectDiagram size="24px" />
              <Heading as="h2" size="md" ml={2}>
                App Context & Progress
              </Heading>
            </Box>
            <Text mt={2}>Track the context and progress of apps being created, including their subject/idea.</Text>
          </GridItem>
          <GridItem w="100%" bg="red.500" borderRadius="md" p={4} color="white">
            <Box display="flex" alignItems="center">
              <FaDollarSign size="24px" />
              <Heading as="h2" size="md" ml={2}>
                Subscriptions & Costs
              </Heading>
            </Box>
            <Text mt={2}>Track subscriptions, fees, memberships, and other monthly costs.</Text>
          </GridItem>
        </Grid>
        <Box mt={8}>
          <Heading as="h3" size="lg" mb={4}>
            Daily/Weekly/Monthly Summaries
          </Heading>
          <Text>Summary content goes here...</Text>
        </Box>
        <Box mt={8}>
          <Heading as="h3" size="lg" mb={4}>
            Notifications
          </Heading>
          <Text>Notification content goes here...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;