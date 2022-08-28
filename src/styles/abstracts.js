import styled from 'styled-components';

const type = '';
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
      lg: '5.5rem',
      md: '3.25rem',
      sm: '2.125rem',
      base: '1.625rem',
    },
    letterSpacing: {
      lg: '-0.0625rem',
    },
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

export const IosDownload = styled.button``;
export const AndroidDownload = styled.button``;
