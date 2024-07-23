import { HeaderSimple } from './components/header/HeaderSimple'
import { HeroText } from './components/hero/HeroText'
import {FooterSocial} from './components/footer/FooterSocial'

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
      <HeaderSimple />
      <HeroText />
      <FooterSocial />
    </MantineProvider>
  )
}

export default App
