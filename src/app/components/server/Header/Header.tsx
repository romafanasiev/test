import { Box, Container, Stack } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { NavList, SignOut } from '../../client';

export const Header = () => {
  return (
    <Box bg="gray.50" color="gray.700" as="header">
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        spacing={4}
        justify="space-between"
        align="center"
        direction="row"
      >
        <Logo />

        <Stack direction="row" spacing={6} as="nav" alignItems="center">
          <NavList />
          <SignOut />
        </Stack>
      </Container>
    </Box>
  );
};

