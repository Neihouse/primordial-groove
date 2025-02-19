'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
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
  const [opened, { toggle, close }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const pathname = usePathname();
  const router = useRouter();

  const NavLinks = ({ vertical = false }) => (
    <Group gap={vertical ? 'md' : 'xs'} className={vertical ? classes.verticalNav : ''}>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.link}
          className={`${classes.link} ${pathname === link.link ? classes.active : ''}`}
          onClick={() => {
            if (opened) {
              close();
            }
          }}
        >
          {link.label}
        </Link>
      ))}
    </Group>
  );

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Link href="/" className={classes.logoLink}>
          <Group gap={10} wrap="nowrap">
            <Image src="/logo.svg" w={30} h={30} alt="Primordial Groove" />
            <Text size="xl" fw={700} className={classes.logoText}>
              Primordial Groove
            </Text>
          </Group>
        </Link>

        {/* Desktop Navigation */}
        <Group gap={5} hiddenFrom="xs" className={classes.desktopNav}>
          <NavLinks />
          <ActionIcon
            variant="default"
            onClick={() => toggleColorScheme()}
            size="lg"
            aria-label="Toggle color scheme"
          >
            {colorScheme === 'dark' ? (
              <IconSun size="1.2rem" stroke={1.5} />
            ) : (
              <IconMoonStars size="1.2rem" stroke={1.5} />
            )}
          </ActionIcon>
        </Group>

        {/* Mobile Navigation */}
        <Burger hiddenFrom="xs" opened={opened} onClick={toggle} size="sm" />

        <Drawer
          opened={opened}
          onClose={close}
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
