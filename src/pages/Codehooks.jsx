import React, { useState } from "react";
import axios from "axios";
import { Container, Heading, Text, VStack, Box, Input, Button } from "@chakra-ui/react";

const Codehooks = () => {
  const [functionName, setFunctionName] = useState("");
  const [functionCode, setFunctionCode] = useState("");
  const [serverlessFunction, setServerlessFunction] = useState(null);
  const [collectionName, setCollectionName] = useState("");
  const [collectionData, setCollectionData] = useState("");
  const [databaseResponse, setDatabaseResponse] = useState(null);

  const handleCreateFunction = async () => {
    try {
      const response = await axios.post(
        "https://api.codehooks.io/v1/functions",
        { name: functionName, code: functionCode },
        {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
        }
      );
      setServerlessFunction(response.data);
    } catch (error) {
      console.error("Error creating serverless function:", error);
    }
  };

  const handleDatabaseOperation = async (method) => {
    try {
      const response = await axios({
        method,
        url: `https://api.codehooks.io/v1/database/${collectionName}`,
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
        },
        data: method === "POST" || method === "PUT" ? JSON.parse(collectionData) : undefined,
      });
      setDatabaseResponse(response.data);
    } catch (error) {
      console.error(`Error performing ${method} operation:`, error);
    }
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Codehooks API Integration
      </Heading>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Create Serverless Function
          </Heading>
          <Input
            placeholder="Function Name"
            value={functionName}
            onChange={(e) => setFunctionName(e.target.value)}
            mb={4}
          />
          <Input
            placeholder="Function Code"
            value={functionCode}
            onChange={(e) => setFunctionCode(e.target.value)}
            mb={4}
          />
          <Button onClick={handleCreateFunction}>Create Function</Button>
          {serverlessFunction && (
            <Box mt={4} p={4} bg="gray.100" borderRadius="md">
              <Text>Function Created: {serverlessFunction.name}</Text>
            </Box>
          )}
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Database Operations
          </Heading>
          <Input
            placeholder="Collection Name"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            mb={4}
          />
          <Input
            placeholder="Collection Data (JSON)"
            value={collectionData}
            onChange={(e) => setCollectionData(e.target.value)}
            mb={4}
          />
          <Button onClick={() => handleDatabaseOperation("POST")}>Create Document</Button>
          <Button onClick={() => handleDatabaseOperation("GET")}>Read Documents</Button>
          <Button onClick={() => handleDatabaseOperation("PUT")}>Update Document</Button>
          <Button onClick={() => handleDatabaseOperation("DELETE")}>Delete Document</Button>
          {databaseResponse && (
            <Box mt={4} p={4} bg="gray.100" borderRadius="md">
              <Text>Database Response: {JSON.stringify(databaseResponse, null, 2)}</Text>
            </Box>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Codehooks;