import React, { useState } from "react";
import { Box, Heading, Text, Button, VStack, HStack, Image, useToast } from "@chakra-ui/react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const choices = ["rock", "paper", "scissors"];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Draw";
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
};

const Index = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const toast = useToast();

  const handlePlay = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    setResult(getResult(choice, randomChoice));
    toast({
      title: getResult(choice, randomChoice),
      status: getResult(choice, randomChoice) === "You Win!" ? "success" : "error",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box textAlign="center" fontSize="xl" bg="gray.100" minH="100vh" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          じゃんけん (Rock-Paper-Scissors)
        </Heading>
        <Image src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHJvY2slMjBwYXBlciUyMHNjaXNzb3JzfGVufDB8fHx8MTcxMTE1NTA4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Rock Paper Scissors" maxW="300px" />
        <Text>Choose your move:</Text>
        <HStack>
          <Button onClick={() => handlePlay("rock")} leftIcon={<FaHandRock />}>
            Rock
          </Button>
          <Button onClick={() => handlePlay("paper")} leftIcon={<FaHandPaper />}>
            Paper
          </Button>
          <Button onClick={() => handlePlay("scissors")} leftIcon={<FaHandScissors />}>
            Scissors
          </Button>
        </HStack>
        {userChoice && (
          <>
            <Text>You chose: {userChoice}</Text>
            <Text>Computer chose: {computerChoice}</Text>
            <Text fontWeight="bold">{result}</Text>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
