'use client';

import { Container } from '@mantine/core';
import { FeaturesCards } from '@/components/FeaturesCards/FeaturesCards';
import { FoundersGrid } from '@/components/FoundingArtists/FoundingArtists';
import { HeroTitle } from '@/components/HeroTitle/HeroTitle';
import { NewsletterSignup } from '@/components/NewsletterSignup/NewsletterSignup';
import { UpcomingEvents } from '@/components/UpcomingEvents/UpcomingEvents';

export default function HomePage() {
  return (
    <>
      <HeroTitle />
      <Container size="lg">
        <FeaturesCards />
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Founding Artists</h2>
          <FoundersGrid />
        </div>
        <UpcomingEvents />
      </Container>
      <NewsletterSignup />
      <Container size="lg" />
    </>
  );
}
