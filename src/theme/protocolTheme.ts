// Style overrides for typography to match Mozilla Protocol design system
// https://protocol.mozilla.org/


import { useMemo, useState } from 'react';

//import { orange, amber, grey } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';



import components from './components';
import typography from './typography';


const useProtocolTheme = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const protocolTheme: Theme = useMemo(
    () =>
      createTheme({
        palette: { 
          mode,
          ...(mode === 'light' ? {
            background: {
              default: '#fff',
            },
            text: {
              primary: '#000',
              
            },
          } : {
            background: {
              default: '#edf2f4',
            },
            text: {
              primary: '#000',
              secondary: '#000',
            },
          }),
        },
        components,
        typography,
      }),
    [mode],
  );

  /* const protocolTheme: Theme = useMemo(
    () =>
      createTheme({
        palette: { 
          mode, 
          ...(mode === 'dark' ? {
            background: {
              default: '#C0C0C0',
              paper: '#000000',
            },
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          } : {
            primary: orange,
            divider: orange[200],
            text: {
              primary: '#000',
              secondary: grey[500],
            },
            background: {
              default: '#fff',
              paper: orange[900],
            },
          }),
          
        },
        components,
        typography,
      }),
    [mode],
  );
 */
  

  return { mode, toggleColorMode, protocolTheme };
};
export default useProtocolTheme;
