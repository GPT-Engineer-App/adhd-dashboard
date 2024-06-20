import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Heading, Text, VStack, Box, Spinner, Alert, AlertIcon } from "@chakra-ui/react";

const ManicTime = () => {
  const [userData, setUserData] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError("Error fetching user data");
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
        setError("Error fetching activities");
        console.error("Error fetching activities:", error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await fetchUserData();
      await fetchActivities();
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="xl" mb={4}>
        ManicTime Data
      </Heading>
      {loading && <Spinner />}
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
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