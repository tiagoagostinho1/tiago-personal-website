import { Title, Text, Button, Container, Avatar } from '@mantine/core';
import classes from './HeroText.module.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Container p={0} size={600}>
          <Avatar
            src="./bemoji.png"
            size={220}
            radius={80}
            mx="auto"
            mt={-30}
            className={classes.avatar}
          />
          <Text size="xl" c="dimmed" className={classes.description}>
            Hello, I am Tiago Agostinho!
          </Text>
        </Container>
        <Title className={classes.title}>
          Unlocking {' '}
          <Text component="span" className={classes.highlight} inherit>
            web experiences
          </Text>{' '}
            with Top-Tier React Development
        </Title>
        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Contact Me
          </Button>
        </div>
      </div>
    </Container>
  );
} 