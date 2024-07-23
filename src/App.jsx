import { HeaderSimple } from './components/header/HeaderSimple'
import { HeroText } from './components/hero/HeroText'
import { AboutMe } from './components/about/AboutMe'
import { GetInTouchSimple } from './components/contact/GetInTouchSimple'
import {FooterSocial} from './components/footer/FooterSocial'

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
      <HeaderSimple />
      <HeroText />
      <AboutMe />
      <GetInTouchSimple />
      <FooterSocial />
    </MantineProvider>
  )
}

export default App
