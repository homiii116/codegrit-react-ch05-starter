import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ThemeSwitcher = styled.li({
  padding: '5px',
  marginBottom: '7px'
})

const ThemeSwitcher = ({ theme, switchTheme }) => (
  <ul>
    <ThemeSwitcher>
      <a 
        className={theme === 'light' ? "chosen" : "default"}
        onClick={(e) => switchTheme('light', e)}>
        Light
      </a>
    </ThemeSwitcher>
    <ThemeSwitcher>
      <a 
        className={theme === 'dark' ? "chosen" : "default"}
        onClick={(e) => switchTheme('dark', e)}>
        Dark
      </a>
    </ThemeSwitcher>
  </ul>
);

Comment.propTypes = {
  switchTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default ThemeSwitcher;