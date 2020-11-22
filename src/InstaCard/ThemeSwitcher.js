import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';


const ThemeSwitcherStyle = styled.li({
  padding: '5px',
  marginBottom: '7px'
})

const ThemeFontColor = styled.a({
  color: '#262626',
  cursor: 'pointer',
   '&:hover, &:active': {
      color: '#36cfc9'
   }
}, ({ chosen }) => {
  let switchColor = []
  if(chosen) {
    switchColor.push({ color: '#36cfc9' })
  }
  return switchColor;
})

const ThemeSwitcher = ({ theme, switchTheme }) => (
  <ul>
    <ThemeSwitcherStyle>
      <ThemeFontColor
        chosen={theme === 'light'}
        onClick={(e) => switchTheme('light', e)}>
        Light
      </ThemeFontColor>
    </ThemeSwitcherStyle>
    <ThemeSwitcherStyle>
      <ThemeFontColor
        chosen={theme === 'dark'}
        onClick={(e) => switchTheme('dark', e)}>
        Dark
      </ThemeFontColor>
    </ThemeSwitcherStyle>
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