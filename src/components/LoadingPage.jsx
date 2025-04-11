import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import loadingGif from "../uiux.gif"; 

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // Simulated 3-second load time
  }, []);

  if (!loading) return null; // Hide loader when done

  return (
    <StyledWrapper
      as={motion.div}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 6, delay: 4 }}
    >
      <img src={loadingGif} alt="Loading..." />
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  position: fixed;
  left:0;
  top:0;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9990;

  img {
    width: 150rem; /* Adjust size */
    height: auto;
  }
`;

export default LoadingPage;
