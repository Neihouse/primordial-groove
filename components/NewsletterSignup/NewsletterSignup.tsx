'use client';

import { IconMail } from '@tabler/icons-react';
import { Button, Container, Stack, Text, TextInput, Title } from '@mantine/core';
import classes from './NewsletterSignup.module.css';

export function NewsletterSignup() {
  return (
    <Container size="lg" py="xl" component="section" aria-labelledby="newsletter-title">
      <Stack gap="xl">
        <Title order={2} id="newsletter-title" className={classes.title} ta="center">
          Stay in the Loop
        </Title>

        <Text c="dimmed" className={classes.description} ta="center">
          Subscribe to our newsletter for exclusive updates on underground events, artist features,
          and early access to ticket releases.
        </Text>

        <Stack gap="md" className={classes.controls}>
          <TextInput
            placeholder="your@email.com"
            classNames={{ input: classes.input }}
            aria-label="Email subscription"
            size="md"
          />
          <Button
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'violet', to: 'grape' }}
            leftSection={<IconMail size={18} />}
            fullWidth
            size="md"
          >
            Subscribe
          </Button>
        </Stack>

        <Text ta="center" fz="sm" c="dimmed">
          We respect your privacy. Unsubscribe at any time.
        </Text>
      </Stack>
    </Container>
  );
}
