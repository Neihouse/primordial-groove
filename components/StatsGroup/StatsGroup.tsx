'use client';

import { IconMusic, IconUsers, IconVinyl, IconWaveSine } from '@tabler/icons-react';
import { Group, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import classes from './StatsGroup.module.css';

type IconKey = 'events' | 'artists' | 'tracks' | 'listeners';

const icons = {
  events: IconVinyl,
  artists: IconUsers,
  tracks: IconMusic,
  listeners: IconWaveSine,
};

interface StatsData {
  title: string;
  value: string;
  diff: number;
  icon: IconKey;
}

const data: StatsData[] = [
  {
    title: 'Underground Events',
    value: '35+',
    diff: 8,
    icon: 'events',
  },
  {
    title: 'Active Artists',
    value: '25+',
    diff: 5,
    icon: 'artists',
  },
  {
    title: 'Original Tracks',
    value: '120+',
    diff: 12,
    icon: 'tracks',
  },
  {
    title: 'Monthly Listeners',
    value: '2.5K+',
    diff: 18,
    icon: 'listeners',
  },
];

export function StatsGroup() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper withBorder p="md" radius="md" key={stat.title} className={classes.card}>
        <Stack gap="md">
          <Group justify="space-between">
            <Text size="xs" c="dimmed" className={classes.title}>
              {stat.title}
            </Text>
            <Icon className={classes.icon} size={22} stroke={1.5} />
          </Group>

          <Group align="flex-end" gap="xs">
            <Text className={classes.value}>{stat.value}</Text>
            <Text c="teal" fz="sm" fw={500} className={classes.diff}>
              <span>+{stat.diff}%</span>
            </Text>
          </Group>

          <Text fz="xs" c="dimmed">
            Compared to previous month
          </Text>
        </Stack>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid
        cols={{ base: 1, xs: 2, md: 4 }}
        spacing={{ base: 'md', sm: 'lg' }}
        verticalSpacing={{ base: 'md', sm: 'lg' }}
      >
        {stats}
      </SimpleGrid>
    </div>
  );
}
