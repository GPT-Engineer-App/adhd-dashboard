import React, { useState } from "react";
import axios from "axios";
import { Container, Heading, Text, VStack, Box, Input, Button, Image, Spinner, Alert, AlertIcon } from "@chakra-ui/react";

const AimlApi = () => {
  const [text, setText] = useState("");
  const [textAnalysis, setTextAnalysis] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageRecognition, setImageRecognition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTextAnalysis = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://api.aimlapi.com/v1/text/analysis",
        { text },
        {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
        }
      );
      setTextAnalysis(response.data);
    } catch (error) {
      setError("Error analyzing text");
      console.error("Error analyzing text:", error);
    }
    setLoading(false);
  };

  const handleImageRecognition = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://api.aimlapi.com/v1/image/recognition",
        { image_url: imageUrl },
        {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
        }
      );
      setImageRecognition(response.data);
    } catch (error) {
      setError("Error recognizing image");
      console.error("Error recognizing image:", error);
    }
    setLoading(false);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="xl" mb={4}>
        AIML API Integration
      </Heading>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Text Analysis
          </Heading>
          <Input
            placeholder="Enter text for analysis"
            value={text}
            onChange={(e) => setText(e.target.value)}
            mb={4}
          />
          <Button onClick={handleTextAnalysis}>Analyze Text</Button>
          {loading && <Spinner />}
          {error && (
            <Alert status="error" mb={4}>
              <AlertIcon />
              {error}
            </Alert>
          )}
          {textAnalysis && (
            <Box mt={4} p={4} bg="gray.100" borderRadius="md">
              <Text>Analysis Result: {textAnalysis.result}</Text>
            </Box>
          )}
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Image Recognition
          </Heading>
          <Input
            placeholder="Enter image URL for recognition"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            mb={4}
          />
          <Button onClick={handleImageRecognition}>Recognize Image</Button>
          {loading && <Spinner />}
          {error && (
            <Alert status="error" mb={4}>
              <AlertIcon />
              {error}
            </Alert>
          )}
          {imageRecognition && (
            <Box mt={4} p={4} bg="gray.100" borderRadius="md">
              <Text>Recognition Result: {imageRecognition.result}</Text>
              <Image src={imageUrl} alt="Recognized" mt={4} />
            </Box>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default AimlApi;