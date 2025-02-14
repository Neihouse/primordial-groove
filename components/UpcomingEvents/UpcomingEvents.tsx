'use client';

import { IconCalendar, IconMapPin, IconTicket } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import classes from './UpcomingEvents.module.css';

const events = [
  {
    title: 'Bass Ritual Vol. 3',
    date: 'March 15, 2024',
    location: 'Underground Vault, Downtown',
    description: 'Deep bass meditation with live visual projections and immersive sound design.',
    type: 'Live Event',
    ticketStatus: 'Early Bird',
  },
  {
    title: 'Sonic Alchemy Workshop',
    date: 'March 22, 2024',
    location: 'The Sound Laboratory',
    description:
      'Learn the art of sound design and electronic music production with our resident artists.',
    type: 'Workshop',
    ticketStatus: 'Limited Spots',
  },
  {
    title: 'Late Night Frequencies',
    date: 'April 5, 2024',
    location: 'Secret Location',
    description: 'An all-night journey through experimental soundscapes and progressive beats.',
    type: 'Live Event',
    ticketStatus: 'Coming Soon',
  },
];

export function UpcomingEvents() {
  const EventCard = ({ event }) => (
    <Card withBorder radius="md" className={classes.card}>
      <Stack gap="md">
        <Group justify="space-between">
          <Badge variant="light" radius="md" size="lg">
            {event.type}
          </Badge>
          <Badge variant="filled" radius="md" size="lg">
            {event.ticketStatus}
          </Badge>
        </Group>

        <Text fz="lg" fw={700} className={classes.cardTitle}>
          {event.title}
        </Text>

        <Text fz="sm" c="dimmed">
          {event.description}
        </Text>

        <Stack gap="xs">
          <Group gap="xs" wrap="nowrap">
            <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            <Text size="sm">{event.date}</Text>
          </Group>

          <Group gap="xs" wrap="nowrap">
            <IconMapPin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            <Text size="sm">{event.location}</Text>
          </Group>
        </Stack>

        <Button
          variant="light"
          radius="md"
          fullWidth
          leftSection={<IconTicket style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
        >
          Get Tickets
        </Button>
      </Stack>
    </Card>
  );

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={2} className={classes.title} ta="center">
            Upcoming Events
          </Title>
          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Join us for immersive experiences that push the boundaries of sound and art
          </Text>
        </div>

        <Grid gutter={{ base: 'md', sm: 'xl' }}>
          {events.map((event) => (
            <Grid.Col key={event.title} span={{ base: 12, sm: 6, md: 4 }}>
              <EventCard event={event} />
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
