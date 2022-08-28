import styled, { createGlobalStyle } from 'styled-components';

const size = {
  mobile: '26.56em',
  tablet: '48em',
  laptop: '64em',
  desktop: '80em',
};

export const abstracts = {
  colors: {
    green: '#66E2DC',
    orange: '#FA7453',
    yellow: '#FFB964',
    white: '#FCFAF9',
    black: '#191826',
  },
  typography: {
    size: {
      xl: '5.5rem',
      lg: '2.5rem',
      md: '1.25rem',
      sm: '1rem',
    },
    fontWeight: {
      800: '800',
      700: '700',
      500: '500',
      400: '400',
    },
    lineHeight: {
      lg: '3.5rem',
      md: '3.25rem',
      sm: '2.125rem',
      base: '1.625rem',
    },
    letterSpacing: {
      lg: '-0.0625rem',
    },
  },
  devices: {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  },
};
export const HeadingLarge = styled.h1`
  font-weight: ${abstracts.typography.fontWeight[800]};
  font-size: ${abstracts.typography.size.lg};
  line-height: ${abstracts.typography.lineHeight.lg};
  letter-spacing: ${abstracts.typography.letterSpacing.lg};
  color: ${(props) => props.color ?? abstracts.colors.black};
`;
export const HeadingMedium = styled.h2`
  font-weight: ${abstracts.typography.fontWeight[700]};
  font-size: ${abstracts.typography.size.lg};
  line-height: ${abstracts.typography.lineHeight.md};
  color: ${(props) => props.color ?? abstracts.colors.black};
`;
export const BodyOne = styled.p`
  font-weight: ${abstracts.typography.fontWeight[400]};
  font-size: ${abstracts.typography.size.md};
  line-height: ${abstracts.typography.lineHeight.sm};
  color: ${(props) => props.color ?? abstracts.colors.black};
`;
export const BodyTwo = styled.p`
  font-weight: ${abstracts.typography.fontWeight[400]};
  font-size: ${abstracts.typography.size.sm};
  line-height: ${abstracts.typography.lineHeight.base};
  color: ${(props) => props.color ?? abstracts.colors.black};
`;

export const IosDownload = styled.button`
  cursor: pointer;
  color: ${abstracts.colors.white};
  background-color: ${abstracts.colors.black};
  border: none;
  padding: 1.125rem;
  border-radius: 0.75rem;
  font-weight: 600;
`;
export const AndroidDownload = styled.button`
  cursor: pointer;

  color: ${abstracts.colors.black};
  background-color: ${abstracts.colors.white};
  border: none;
  padding: 1.125rem;
  border-radius: 0.75rem;
  font-weight: 600;
`;

export const BlockStyles = createGlobalStyle`
body {
    font-family: 'IBM Plex Sans';
    overflow-x: hidden;
    background-image: url('/assets/bg-main-mobile.png');
    background-repeat: no-repeat;
    background-position: -20% -20%;

    @media ${abstracts.devices.tablet} {
      background-image: url('/assets/bg-main-tablet.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left top;

    }
    @media ${abstracts.devices.desktop} {
      background-image: url('/assets/bg-main-desktop.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left top;
    }
}

`;
