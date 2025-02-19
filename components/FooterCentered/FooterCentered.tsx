'use client';

import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, rem, Stack, Text } from '@mantine/core';
import classes from './FooterCentered.module.css';

const links = [
  { link: '/terms', label: 'Terms' },
  { link: '/privacy', label: 'Privacy' },
  { link: '/contact', label: 'Contact' },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Stack gap="lg" align="center">
          <Text size="xl" fw={700}>
            Your Logo
          </Text>
          <Group className={classes.links} gap="xs">
            {items}
          </Group>
          <Group gap="xs" className={classes.social} wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Stack>
      </Container>
    </footer>
  );
}
