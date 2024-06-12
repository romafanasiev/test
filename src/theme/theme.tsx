import { extendTheme } from '@chakra-ui/react';
import { rubik } from './fonts';

export const theme = extendTheme({
  fonts: {
    heading: `var(${rubik.variable})`,
    body: `var(${rubik.variable})`,
  },
});



