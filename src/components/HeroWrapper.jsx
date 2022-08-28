import React from 'react';
import styled from 'styled-components';
import { abstracts, BodyOne, HeadingLarge } from '../styles/abstracts';

export default function HeroWrapper() {
  return (
    <HeroContainer>
      <HeadingLarge>We make your music sound extraordinary.</HeadingLarge>
      <BodyOne>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </BodyOne>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: grid;
  gap: 1.25rem;
  margin: 1.5em;
  margin-top: 4rem;
  margin-bottom: 10.375rem;
  @media ${abstracts.devices.tablet} {
    margin-bottom: 15.5625rem;
    margin-top: -11rem;
    max-width: 32.125em;
  }
  @media ${abstracts.devices.desktop} {
    margin-inline: 10.3125rem;
    max-width: 51.5625em;
  }
`;
