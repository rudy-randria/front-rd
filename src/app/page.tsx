"use client";

import React, { useState } from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import styled from "styled-components";

// Styled Components pour personnaliser des éléments
const CustomContainer = styled(Box)`
  background-color: #f7fafc;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CustomHeading = styled(Heading)`
  color: #2d3748;
  font-weight: bold;
  text-align: center;
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.50">
      {/* Utilisation des composants Chakra UI et Styled Components */}
      <CustomContainer width="300px">
        <CustomHeading as="h1" mb="6">
          Login
        </CustomHeading>
        <form onSubmit={handleLogin}>
          <FormControl id="email" mb="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>

          <FormControl id="password" mb="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" width="full" mt="4">
            Login
          </Button>
        </form>
      </CustomContainer>
    </Box>
  );
}
