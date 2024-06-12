import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Logo } from '../Logo';
import { SocialButton } from '../SocialButton';
import { NavList } from '../../client';

export const Footer = () => {
  return (
    <Box bg="gray.50" color="gray.700" as="footer">
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        spacing={4}
        justify="center"
        align="center"
      >
        <Logo />

        <NavList />
      </Container>

      <Box borderTopWidth={1} borderStyle="solid" borderColor="gray.700">
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>All rights reserved</Text>

          <Stack direction="row" spacing={6}>
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>

            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>

            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

