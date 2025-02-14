'use client';

import { IconMoonStars, IconSun } from '@tabler/icons-react';
import {
  Burger,
  Container,
  Drawer,
  Group,
  Image,
  Stack,
  Switch,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/artists', label: 'Artists' },
  { link: '/events', label: 'Events' },
  { link: '/music', label: 'Music' },
  { link: '/about', label: 'About' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const NavLinks = ({ vertical = false }) => (
    <Stack gap={vertical ? 'md' : 'xs'}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            // Add your navigation logic here
          }}
        >
          {link.label}
        </a>
      ))}
    </Stack>
  );

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <UnstyledButton component="a" href="/">
          <Group gap={10} wrap="nowrap">
            <Image src="/logo.svg" w={30} h={30} alt="Primordial Groove" />
            <Text size="xl" fw={700} className={classes.logoText}>
              Primordial Groove
            </Text>
          </Group>
        </UnstyledButton>

        {/* Desktop Navigation */}
        <Group gap={5} visibleFrom="xs">
          <NavLinks />
          <Switch
            checked={colorScheme === 'dark'}
            onChange={() => toggleColorScheme()}
            size="lg"
            onLabel={<IconSun size="1rem" stroke={2.5} />}
            offLabel={<IconMoonStars size="1rem" stroke={2.5} />}
          />
        </Group>

        {/* Mobile Navigation */}
        <Burger hiddenFrom="xs" opened={opened} onClick={toggle} size="sm" />

        <Drawer
          opened={opened}
          onClose={toggle}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="xs"
          zIndex={1000000}
        >
          <Stack className={classes.mobileLinks}>
            <NavLinks vertical />
            <Switch
              checked={colorScheme === 'dark'}
              onChange={() => toggleColorScheme()}
              size="lg"
              onLabel={<IconSun size="1rem" stroke={2.5} />}
              offLabel={<IconMoonStars size="1rem" stroke={2.5} />}
            />
          </Stack>
        </Drawer>
      </Container>
    </header>
  );
}
