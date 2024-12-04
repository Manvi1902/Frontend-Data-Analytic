import React              from 'react';
import ReactDOM           from 'react-dom/client';
import {BrowserRouter}    from 'react-router-dom'
import { MantineProvider, 
        createTheme }     from '@mantine/core';
import App                from './App';
import '@mantine/core/styles.css';
import './index.css';

const theme = createTheme({
  fontFamily: 'Poppins, sans-serif',
  fontFamilyMonospace: 'Poppins',
  headings: { fontFamily: 'Noto Sans, sans-serif' },
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <MantineProvider theme={theme} defaultColorScheme='light'>
   <BrowserRouter>
   <App />
   </BrowserRouter>
  </MantineProvider>
  </React.StrictMode>
);

