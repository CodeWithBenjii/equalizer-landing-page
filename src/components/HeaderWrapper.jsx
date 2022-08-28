/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { abstracts } from '../styles/abstracts';

export default function NavWrapper() {
  return (
    <HeaderWrapper>
      <div className="">
        <LogoImage src="/assets/logo.svg" alt="" />
      </div>
      <PatternWrap className="">
        <PatternImage src="/assets/bg-pattern-1.svg" />
      </PatternWrap>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4375rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media ${abstracts.devices.tablet} {
    margin-right: 0;
  }
  @media ${abstracts.devices.desktop} {
    margin-left: 10.3125rem;
  }
`;
const PatternWrap = styled.div`
  display: none;
  @media ${abstracts.devices.tablet} {
    display: block;
    margin-right: -2rem;
    margin-top: -5rem;
  }
`;
const PatternImage = styled.img`
  @media ${abstracts.devices.tablet} {
    width: auto;
    height: 25rem;
  }
`;

const LogoImage = styled.img``;
