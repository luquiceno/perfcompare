import type { TypographyOptions } from '@mui/material/styles/createTypography';
// Style overrides for typography to match Mozilla Protocol design system
// https://protocol.mozilla.org/
//const h1Size = '3.5rem';   cambié a 2.5 para hacerlo mas pequeño
const h1Size = '2.5rem';

const typography: TypographyOptions = {
  h1: {
    fontFamily: 'Zilla Slab',
    fontSize: h1Size,
  },
  body2: {
    fontSize: '0.875rem',
    letterSpacing: '.4px',
  },
  button: {
    textTransform: 'none',
  },
  fontFamily: 'Inter',
};

export default typography;
