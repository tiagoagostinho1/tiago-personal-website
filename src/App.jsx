import { useState } from 'react'
import { HeaderSimple } from './components/header/HeaderSimple'
import { HeroText } from './components/hero/HeroText'

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <HeaderSimple />
      <HeroText />
      
    </MantineProvider>
  )
}

export default App
