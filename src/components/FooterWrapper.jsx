/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { abstracts, BodyTwo } from '../styles';

export default function FooterWrapper() {
  return (
    <FooterContainer>
      <TopContainer>
        <img src="/assets/logo.svg" />
        <BodyTwo>
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at equalizer@example.com
        </BodyTwo>
      </TopContainer>
      <BottomContainer>
        <img src="/assets/icon-facebook.svg" />
        <img src="/assets/icon-instagram.svg" />
        <img src="/assets/icon-twitter.svg" />
      </BottomContainer>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  display: grid;
  margin: 2em;
  gap: 4rem;
  @media ${abstracts.devices.desktop} {
    margin-inline: 10.3125rem;
  }
`;
const TopContainer = styled.div``;
const BottomContainer = styled.div`
  display: flex;
  gap: 1em;
`;
