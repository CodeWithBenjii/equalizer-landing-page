import React from 'react';
import styled from 'styled-components';
import {
  abstracts,
  AndroidDownload,
  BodyOne,
  BodyTwo,
  HeadingLarge,
  HeadingMedium,
  IosDownload,
} from '../styles/abstracts';

export default function MainWrapper() {
  return (
    <MainContainer>
      <InnerContainer />
      <PhoneImage src="/assets/illustration-app.png" />
      <DetailCard>
        <HeadingMedium color={abstracts.colors.white}>Premium EQ</HeadingMedium>
        <BodyOne color={abstracts.colors.white}>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </BodyOne>
        <CardPrice>
          <HeadingLarge color={abstracts.colors.white}>$4</HeadingLarge>
          <BodyTwo color={abstracts.colors.white}>/ month</BodyTwo>
        </CardPrice>
        <IosDownload>iOS Download</IosDownload>
        <AndroidDownload>Android Download</AndroidDownload>
      </DetailCard>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: ${abstracts.colors.black};
  height: 37.5em;
  border-radius: 0.75em;
  position: relative;
  @media ${abstracts.devices.tablet} {
    margin-inline: 2em;
    margin-bottom: 11rem;
  }
  @media ${abstracts.devices.desktop} {
    margin-inline: 10.3125rem;
  }
`;

const InnerContainer = styled.div`
  height: 32.5rem;
  background-image: url('/assets/bg-pattern-2.svg');
  background-repeat: no-repeat;
  background-position: center;
  @media ${abstracts.devices.desktop} {
    background-position: 24em;
  }
`;

const PhoneImage = styled.img`
  position: absolute;
  top: -7vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 15em;
  @media ${abstracts.devices.tablet} {
    width: 19.5em;
    margin-inline: 4em;
    top: -10em;
  }
  @media ${abstracts.devices.desktop} {
    width: 19.5em;
    margin-inline: 7.375em;
    top: -10em;
  }
`;

const DetailCard = styled.div`
  border-radius: 0.75rem;
  display: flex;
  gap: 0.8125rem;
  flex-direction: column;
  background-color: ${abstracts.colors.orange};
  padding: 3rem 2.25rem;
  @media ${abstracts.devices.tablet} {
    position: absolute;
    width: 25em;
    top: 14em;
    left: 17em;
  }
  @media ${abstracts.devices.laptop} {
    position: absolute;
    width: 27.875em;
    top: 15vh;
    left: 22vw;
  }
`;

const CardPrice = styled.div`
  margin: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
