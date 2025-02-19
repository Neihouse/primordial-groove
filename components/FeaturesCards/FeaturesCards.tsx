'use client';

import { IconLock, IconUsers, IconVolume } from '@tabler/icons-react';
import { Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import classes from './FeaturesCards.module.css';

const features = [
  {
    title: 'Raw Energy, Unfiltered Sound',
    description:
      'A movement powered by deep bass, hypnotic rhythms, and sonic exploration—crafted by those who live for the underground.',
    icon: IconVolume,
  },
  {
    title: 'Community-Driven Creativity',
    description:
      'Built by artists, for artists. Whether you spin records, paint murals, or create visual worlds, this is a space to collaborate and grow.',
    icon: IconUsers,
  },
  {
    title: 'No Corporate Gatekeepers',
    description:
      'Independent. Unfiltered. No industry middlemen—just pure, unrestrained creative expression.',
    icon: IconLock,
  },
];

export function FeaturesCards() {
  const items = features.map((feature) => (
    <div key={feature.title} className={classes.card}>
      <Stack gap="md">
        <feature.icon size={50} stroke={1.5} className={classes.cardIcon} />
        <div>
          <Text fz="lg" fw={500} className={classes.cardTitle}>
            {feature.title}
          </Text>
          <Text fz="sm" c="dimmed" mt="sm">
            {feature.description}
          </Text>
        </div>
      </Stack>
    </div>
  ));

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={2} className={classes.title} ta="center">
            The Underground Movement
          </Title>

          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Join a community of artists pushing the boundaries of sound and culture.
          </Text>
        </div>

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 'md', sm: 'xl' }}
          verticalSpacing={{ base: 'lg', sm: 'xl' }}
        >
          {items}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
