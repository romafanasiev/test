'use client';

import { Container, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Template = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ y: '50dvh', opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3, ease: 'easeIn' }}
  >
    <Container
      as={Stack}
      maxW="6xl"
      py={4}
      direction="column"
      spacing={4}
      justify="center"
      align="center"
    >
      {children}
    </Container>
  </motion.div>
);

export default Template;

