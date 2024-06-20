import React, { useState } from "react";
import { Container, Heading, Text, VStack, Box, Input, Button, Image, Spinner, Alert, AlertIcon, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const AimlApi = () => {
  const [text, setText] = useState("");
  const [textAnalysis, setTextAnalysis] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageRecognition, setImageRecognition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTextAnalysis = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.aimlapi.com/v1/text/analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_API_KEY`,
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setTextAnalysis(data);
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
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch("https://api.aimlapi.com/v1/image/recognition", {
        method: "POST",
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
        },
        body: formData,
      });
      const data = await response.json();
      setImageRecognition(data);
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
          <InputGroup mb={4}>
            <InputLeftElement pointerEvents="none" children={<FaUpload />} />
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </InputGroup>
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