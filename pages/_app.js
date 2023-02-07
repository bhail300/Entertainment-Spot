import '../styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {

// 2. Call `createTheme` and pass your custom values
const dark = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#1d1d1d',
      text: '#ffff',
      // you can also create your own color
      myDarkColor: '#ff4ecd'
      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

  return (
  
    <NextUIProvider  theme={dark}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
