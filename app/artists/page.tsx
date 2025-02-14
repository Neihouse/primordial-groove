'use client';

import { Container, Title } from '@mantine/core';
import { FoundersGrid } from '@/components/FoundingArtists/FoundingArtists';

const mockArtists = [
  {
    name: 'Artist Name 1',
    role: 'DJ / Producer',
    image: '/path/to/image1.jpg',
  },
  {
    name: 'Artist Name 2',
    role: 'Visual Artist',
    image: '/path/to/image2.jpg',
  },
  // Add more mock artists as needed
];

export default function ArtistsPage() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="xl">
        Meet the Founding Artists
      </Title>
      <FoundersGrid artists={mockArtists} />
    </Container>
  );
}
