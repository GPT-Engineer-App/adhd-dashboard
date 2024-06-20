import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Heading, Text, VStack, Box } from "@chakra-ui/react";

const ManicTime = () => {
  const [userData, setUserData] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://api.manictime.com/v1/users/me", {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchActivities = async () => {
      try {
        const response = await axios.get("https://api.manictime.com/v1/activities", {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
          params: {
            start_date: "2023-01-01",
            end_date: "2023-01-31",
          },
        });
        setActivities(response.data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchUserData();
    fetchActivities();
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="xl" mb={4}>
        ManicTime Data
      </Heading>
      {userData && (
        <Box mb={8}>
          <Heading as="h2" size="lg">
            User Data
          </Heading>
          <Text>Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
        </Box>
      )}
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="lg">
          Activities
        </Heading>
        {activities.map((activity, index) => (
          <Box key={index} p={4} bg="gray.100" borderRadius="md">
            <Text>Activity: {activity.name}</Text>
            <Text>Start Time: {activity.start_time}</Text>
            <Text>End Time: {activity.end_time}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default ManicTime;