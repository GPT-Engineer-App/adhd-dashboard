import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About ADHD Management Dashboard</Heading>
      <Text fontSize="lg" mb={6}>
        The ADHD Management Dashboard is designed to help users track their time, manage tasks, and review screenshots to stay focused and productive. It integrates with various APIs to provide comprehensive data and functionality.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <Text ml={2}>Time Tracking</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Task Management</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Screenshots</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>App Context & Progress</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Subscriptions & Costs</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Daily/Weekly/Monthly Summaries</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Notifications</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;