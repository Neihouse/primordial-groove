'use client';

import { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface Artist {
  name: string;
  role: string;
  image?: string;
}

export function FoundersGrid({ artists }: { artists: Artist[] }) {
  // Initialize with a default value
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsMobile(!mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  // Mobile-first card component
  const ArtistCard = ({ artist }: { artist: Artist }) => (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      bg="dark.8"
      className="transform transition-transform duration-200 hover:scale-105"
    >
      <Stack gap="sm">
        <Group justify="space-between" align="flex-start">
          <div>
            <Text size="lg" fw={600} c="white">
              {artist.name}
            </Text>
            <Badge variant="light" color="gray">
              {artist.role}
            </Badge>
          </div>
        </Group>
      </Stack>
    </Card>
  );

  return (
    <Container size="lg">
      {isMobile ? (
        <Carousel
          slideSize="100%"
          height={200}
          slideGap="md"
          controlsOffset="xs"
          loop
          withControls
          withIndicators
        >
          {artists?.map((artist, index) => (
            <Carousel.Slide key={index}>
              <ArtistCard artist={artist} />
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <Grid>
          {artists?.map((artist, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <ArtistCard artist={artist} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export function FoundingArtistsCarousel({ artists }) {
  // Use state to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent flash of wrong content
  }

  // Mobile-first carousel view (default)
  const carouselView = (
    <Carousel
      withIndicators
      height={400}
      slideSize="100%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={1}
    >
      {artists.map((artist) => (
        <Carousel.Slide key={artist.name}>
          <Card className="h-full">
            <Card.Section>
              <Image src={artist.image} height={240} alt={artist.name} className="object-cover" />
            </Card.Section>
            <Text size="lg" weight={500} mt="md">
              {artist.name}
            </Text>
            <Text size="sm" color="dimmed">
              {artist.description}
            </Text>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );

  // Desktop grid view
  const gridView = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {artists.map((artist) => (
        <Card key={artist.name} className="h-full">
          <Card.Section>
            <Image src={artist.image} height={240} alt={artist.name} className="object-cover" />
          </Card.Section>
          <Text size="lg" weight={500} mt="md">
            {artist.name}
          </Text>
          <Text size="sm" color="dimmed">
            {artist.description}
          </Text>
        </Card>
      ))}
    </div>
  );

  return (
    <Container size="xl" py="xl">
      {isDesktop ? gridView : carouselView}
    </Container>
  );
}
