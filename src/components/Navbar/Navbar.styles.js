import styled from 'styled-components';

export const Wrapper = styled.header``;

export const Nav = styled.nav`
  display: flex;
  padding: 20px 14px;
  justify-content: space-between;
  border-radius: 12px 12px 0 0;
  background: ${({ isDarkMode }) =>
    isDarkMode ? 'var(--navDarkColor)' : 'var(--white)'};
  border-bottom: ${({ isDarkMode }) =>
    isDarkMode ? '' : '1px solid rgb(206, 206, 206)'};

  .nav-left {
    display: flex;
    align-items: center;
    color: var(--lightBlue);
  }

  .nav-right {
    display: flex;

    .toggle-mode {
      display: flex;
      font-size: 12px;
      align-items: center;

      .toggle-light {
        color: ${({ isDarkMode }) =>
          isDarkMode ? 'var(--white)' : 'var(--black)'};
        font-weight: ${({ isDarkMode }) => (isDarkMode ? '200' : '700')};
        opacity: ${({ isDarkMode }) => (isDarkMode ? '0.4' : '1')};
      }

      .toggle-dark {
        color: var(--factsWhiteColor);
        font-weight: ${({ isDarkMode }) => (isDarkMode ? '700' : '200')};
      }
    }
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  margin: 0 6px;
  width: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + .slider {
    background-color: var(--white);
  }

  input:checked + .slider:before {
    transform: translateX(13px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;

  :before {
    position: absolute;
    content: '';
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? 'var(--black)' : 'var(--white)'};
    transition: 0.4s;
  }
`;

export const Logo = styled.img`
  width: 90px;
`;
