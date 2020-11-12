import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core'

const ThemeSwitcherStyle = styled.li({
  padding: '5px',
  marginBottom: '7px'
})

const ThemeFontColor = styled.a({
  color: '#262626',
  cursor: 'pointer'
}, ({ chosen }) => {
  let switchColor = []
  if(chosen) {
    switchColor.push({ color: '#36cfc9' })
  }
  return switchColor;
})

const skyBlue = css({
  color: '#36cfc9'
})

const ThemeSwitcherColorHoverOrActive = css({
  '&:hover, &:active': { skyBlue }
})

const ThemeSwitcher = ({ theme, switchTheme }) => (
  <ul>
    <ThemeSwitcherStyle>
      <ThemeFontColor css={ThemeSwitcherColorHoverOrActive}
        chosen={theme === 'light'}
        onClick={(e) => switchTheme('light', e)}>
        Light
      </ThemeFontColor>
    </ThemeSwitcherStyle>
    <ThemeSwitcherStyle>
      <ThemeFontColor css={ThemeSwitcherColorHoverOrActive}
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