'use client';

import { Container, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import classes from './SoundcloudEmbed.module.css';

const featuredTracks = [
  {
    title: 'Latest Underground Mix',
    artist: 'Melting Cactus',
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID',
  },
  {
    title: 'Experimental Sessions',
    artist: 'Chrnn',
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID',
  },
  {
    title: 'Deep Bass Meditation',
    artist: 'Quiet Pack',
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID',
  },
];

export function SoundcloudEmbed() {
  const tracks = featuredTracks.map((track) => (
    <Paper key={track.title} radius="md" className={classes.track}>
      <Stack gap="md">
        <iframe
          title={track.title}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={track.embedUrl}
        />
        <div>
          <Text fz="lg" fw={700} className={classes.trackTitle}>
            {track.title}
          </Text>
          <Text fz="sm" c="dimmed" mt="xs">
            by {track.artist}
          </Text>
        </div>
      </Stack>
    </Paper>
  ));

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={2} className={classes.title} ta="center">
            Featured Tracks
          </Title>
          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Dive into our latest sonic explorations and underground soundscapes
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 'md', sm: 'xl' }}>
          {tracks}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
