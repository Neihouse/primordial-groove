'use client';

import { useCallback, useState } from 'react';
import { IconArrowLeft, IconArrowRight, IconHeart } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  Progress,
  rem,
  Text,
  Title,
} from '@mantine/core';
import classes from './FoundingArtistsCarousel.module.css';

const foundingArtists = [
  {
    name: 'Melting Cactus',
    role: 'DJ / Producer',
    image: '/artists/melting-cactus.jpg',
    bioLink: '/artists/melting-cactus',
    badges: [
      { emoji: '🎵', label: 'Deep Bass' },
      { emoji: '🔥', label: 'High Energy Sets' },
    ],
    stats: [
      { label: 'Shows', value: '24' },
      { label: 'Releases', value: '12' },
      { label: 'Following', value: '1.2K' },
    ],
    skills: [
      { name: 'Bass Design', level: 95 },
      { name: 'Sound Engineering', level: 85 },
      { name: 'Live Performance', level: 90 },
    ],
  },
  {
    name: 'Chrnn',
    role: 'Sound Designer',
    image: '/artists/chrnn.jpg',
    bioLink: '/artists/chrnn',
    badges: [
      { emoji: '🎛️', label: 'Experimental Sound' },
      { emoji: '🌌', label: 'Atmospheric' },
    ],
    stats: [
      { label: 'Shows', value: '18' },
      { label: 'Releases', value: '8' },
      { label: 'Following', value: '980' },
    ],
    skills: [
      { name: 'Sound Design', level: 98 },
      { name: 'Synthesis', level: 92 },
      { name: 'Production', level: 88 },
    ],
  },
  {
    name: 'Quiet Pack',
    role: 'Visual Artist',
    image: '/artists/quiet-pack.jpg',
    bioLink: '/artists/quiet-pack',
    badges: [
      { emoji: '🎨', label: 'Abstract Visuals' },
      { emoji: '🖥️', label: 'Digital Art' },
    ],
    stats: [
      { label: 'Shows', value: '15' },
      { label: 'Projects', value: '20' },
      { label: 'Following', value: '1.5K' },
    ],
    skills: [
      { name: 'Visual Design', level: 96 },
      { name: 'Motion Graphics', level: 90 },
      { name: 'Live Visuals', level: 94 },
    ],
  },
  {
    name: 'Joe Lanzon',
    role: 'Experimental DJ',
    image: '/artists/joe-lanzon.jpg',
    bioLink: '/artists/joe-lanzon',
    badges: [
      { emoji: '🎚️', label: 'Glitch Sounds' },
      { emoji: '🌊', label: 'Fluid Transitions' },
    ],
    stats: [
      { label: 'Shows', value: '30' },
      { label: 'Releases', value: '15' },
      { label: 'Following', value: '2.1K' },
    ],
    skills: [
      { name: 'DJ Performance', level: 97 },
      { name: 'Genre Blending', level: 95 },
      { name: 'Live Remixing', level: 93 },
    ],
  },
];

export function FoundingArtistsCarousel() {
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});

  const handleLike = useCallback((artistName: string) => {
    setLiked((prev) => ({ ...prev, [artistName]: !prev[artistName] }));
  }, []);

  const slides = foundingArtists.map((artist) => (
    <Carousel.Slide key={artist.name}>
      <Card withBorder padding="md" radius="md" className={classes.card}>
        <Group wrap="nowrap" gap="xl">
          <Image
            src={artist.image}
            height={160}
            width={160}
            radius="md"
            className={classes.image}
          />

          <div style={{ flex: 1 }}>
            <Group justify="space-between" wrap="nowrap">
              <div>
                <Text fz="lg" fw={500} className={classes.artistName}>
                  {artist.name}
                </Text>
                <Badge size="sm" variant="gradient" gradient={{ from: 'indigo', to: 'violet' }}>
                  {artist.role}
                </Badge>
              </div>
              <Group gap={0}>
                <ActionIcon
                  variant={liked[artist.name] ? 'gradient' : 'subtle'}
                  radius="md"
                  size={36}
                  gradient={{ from: 'pink', to: 'red' }}
                  onClick={() => handleLike(artist.name)}
                >
                  <IconHeart
                    className={classes.like}
                    stroke={1.5}
                    fill={liked[artist.name] ? 'currentColor' : 'none'}
                  />
                </ActionIcon>
              </Group>
            </Group>

            <Group gap={7} mt="xs">
              {artist.badges.map((badge) => (
                <Badge key={badge.label} variant="light" leftSection={badge.emoji} color="violet">
                  {badge.label}
                </Badge>
              ))}
            </Group>

            <Group mt="md" gap="xl">
              {artist.stats.map((stat) => (
                <div key={stat.label}>
                  <Text ta="center" fz="lg" fw={500}>
                    {stat.value}
                  </Text>
                  <Text ta="center" fz="sm" c="dimmed" lh={1}>
                    {stat.label}
                  </Text>
                </div>
              ))}
            </Group>

            <Group gap="xs" mt="md">
              {artist.skills.map((skill) => (
                <div key={skill.name} className={classes.skill}>
                  <Group justify="space-between" align="center" gap="xs">
                    <Text fz="xs" fw={500}>
                      {skill.name}
                    </Text>
                    <Text fz="xs" c="dimmed">
                      {skill.level}%
                    </Text>
                  </Group>
                  <Progress value={skill.level} size="xs" color="violet" />
                </div>
              ))}
            </Group>

            <Button
              fullWidth
              radius="md"
              mt="md"
              component="a"
              href={artist.bioLink}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'violet' }}
            >
              View Profile
            </Button>
          </div>
        </Group>
      </Card>
    </Carousel.Slide>
  ));

  return (
    <section className={classes.section}>
      <Container size="lg">
        <Title order={2} className={classes.title} ta="center">
          Meet Our Founding Artists
        </Title>
        <Text c="dimmed" className={classes.description} ta="center" mt="sm">
          The visionaries behind Primordial Groove, pushing boundaries in sound and visual art
        </Text>

        <Carousel
          classNames={classes}
          slideSize="100%"
          slideGap="md"
          align="start"
          slidesToScroll={1}
          loop
          withControls
          withIndicators
          nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
          previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
        >
          {slides}
        </Carousel>
      </Container>
    </section>
  );
}
