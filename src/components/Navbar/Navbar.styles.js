import styled from 'styled-components';

export const Wrapper = styled.header`
  .nav-dark {
    background-color: var(--navDarkColor);
  }
`;

export const Nav = styled.nav`
  display: flex;
  padding: 20px 14px;
  justify-content: space-between;
  border-radius: 12px 12px 0 0;
  background: ${({ isDarkMode }) =>
    isDarkMode ? 'var(--navDarkColor)' : 'var(--white)'};
  border-bottom: 1px solid rgb(206, 206, 206);
`;
