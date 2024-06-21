import { useState } from "react";
import { Container, VStack, Heading, Box, Text, Grid, GridItem, Flex, Switch, useColorMode, Input, Button, HStack } from "@chakra-ui/react";
import { FaClock, FaTasks, FaImage, FaProjectDiagram, FaDollarSign, FaBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    // For now, just log the search query
  };

  return (
    <Container maxW="container.xl" p={4}>
      <HStack spacing={4} mb={4}>
        <Link to="/">Home</Link>
        <Link to="/manictime">ManicTime</Link>
        <Link to="/aimlapi">AIML API</Link>
        <Link to="/codehooks">Codehooks</Link>
        <Link to="/about">About</Link>
      </HStack>
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
            Project Scope and Requirements
          </Heading>
          <Text>
            The ADHD Management Dashboard is designed to help users track their time, manage tasks, and review screenshots to stay focused and productive. The project includes the following features:
            <ul>
              <li>Time Tracking</li>
              <li>Task Management</li>
              <li>Screenshots</li>
              <li>App Context & Progress</li>
              <li>Subscriptions & Costs</li>
              <li>Daily/Weekly/Monthly Summaries</li>
              <li>Notifications</li>
            </ul>
          </Text>
        </Box>
        <Box mt={8}>
          <Heading as="h3" size="lg" mb={4}>
            Tech Stack
          </Heading>
          <Text>
            The dashboard is built using the following technologies:
            <ul>
              <li>React</li>
              <li>Chakra UI</li>
              <li>React Router</li>
              <li>Axios</li>
              <li>Framer Motion</li>
              <li>React Icons</li>
            </ul>
          </Text>
        </Box>
        <Box mt={8}>
          <Heading as="h3" size="lg" mb={4}>
            Step-by-Step Implementation
          </Heading>
          <Text>
            The implementation of the dashboard is divided into the following steps:
            <ul>
              <li>Setting up the project</li>
              <li>Implementing the navigation bar</li>
              <li>Creating the home page</li>
              <li>Integrating the ManicTime API</li>
              <li>Integrating the AIML API</li>
              <li>Integrating the Codehooks API</li>
              <li>Adding the About page</li>
              <li>Testing and debugging</li>
              <li>Final review and deployment</li>
            </ul>
          </Text>
        </Box>
        <Box mt={8}>
          <Heading as="h3" size="lg" mb={4}>
            Testing and Debugging
          </Heading>
          <Text>
            To ensure the dashboard functions correctly, the following testing and debugging steps are performed:
            <ul>
              <li>Unit testing</li>
              <li>Integration testing</li>
              <li>End-to-end testing</li>
              <li>Debugging using browser developer tools</li>
            </ul>
          </Text>
        </Box>
        <Box mt={8}>
          <Heading as="h3" size="lg" mb={4}>
            Enhancements and Improvements
          </Heading>
          <Text>
            The following enhancements and improvements are planned for future updates:
            <ul>
              <li>Improved user interface</li>
              <li>Additional features</li>
              <li>Performance optimizations</li>
              <li>Better error handling</li>
            </ul>
          </Text>
        </Box>
        <Box mt={8}>
          <Heading as="h3" size="lg" mb={4}>
            Final Review and Deployment
          </Heading>
          <Text>
            The final review and deployment process includes the following steps:
            <ul>
              <li>Code review</li>
              <li>Final testing</li>
              <li>Deployment to production</li>
              <li>Monitoring and maintenance</li>
            </ul>
          </Text>
        </Box>
      </VStack>
      <Box as="footer" mt={8} p={4} bg="gray.200" textAlign="center">
        <Text>&copy; 2023 ADHD Management Dashboard. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;