'use client';

import { IconHeadphones, IconTicket } from '@tabler/icons-react';
import { Button, Container, Overlay, Stack, Text, Title } from '@mantine/core';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={1}
      />
      <Container size="md" className={classes.inner}>
        <Stack gap={{ base: 'md', sm: 'xl' }}>
          <Title className={classes.title}>
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: 'blue.9', to: 'violet.9' }}
              inherit
            >
              PRIMORDIAL GROOVE
            </Text>
          </Title>

          <Text className={classes.description} size="xl">
            Join the movement. Build the underground. A collective where sound, culture, and
            community collide—crafted by artists, for artists.
          </Text>

          <Stack gap="md" className={classes.controls}>
            <Button
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue.9', to: 'violet.9' }}
              size="xl"
              component="a"
              href="https://lu.ma/primordialgroove"
              target="_blank"
              rel="noopener noreferrer"
              leftSection={<IconTicket size={20} />}
            >
              Discover Events
            </Button>

            <Button
              className={classes.control}
              variant="default"
              size="xl"
              component="a"
              href="/artists"
              leftSection={<IconHeadphones size={20} />}
            >
              Meet Artists
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
