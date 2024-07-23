import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';

import { IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';

import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import myLogo from '/TA.svg';

const links = [
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact Me' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <img src={myLogo} className="logo" alt="Tiago Agostinho logo" height={32} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Group gap={5} visibleFrom="xs">
          <a href='https://www.linkedin.com/in/tmagostinho' target="_blank">
            <IconBrandLinkedin stroke={2} />
          </a>
          <a href='https://x.com/TiagoAgost85854' target="_blank">
            <IconBrandTwitter stroke={2} />
          </a>
        </Group>
        
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}