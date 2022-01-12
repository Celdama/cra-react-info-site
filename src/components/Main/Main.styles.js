import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 57px 27px;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? 'var(--mainDarkColor)' : 'var(--white)'};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 39px;
  color: ${({ isDarkMode }) =>
    isDarkMode ? 'var(--white)' : 'var(--mainDarkColor)'};
  letter-spacing: -0.05em;
`;

export const List = styled.ul`
  margin-top: 46px;
  max-width: 400px;
  color: ${({ isDarkMode }) =>
    isDarkMode ? 'var(--white)' : 'var(--mainDarkColor)'};

  li {
    padding-block: 10px;
    line-height: 19px;

    ::marker {
      color: var(--lightBlue);
      font-size: 1.4rem;
    }
  }
`;
