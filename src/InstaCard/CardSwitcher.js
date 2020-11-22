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
   '&:hover, &:active' : {
      color: '#36cfc9'
   }
}, ({ chosen }) => {
  let switchColor = []
  if(chosen) {
    switchColor.push({ color: '#36cfc9' })
  }
  return switchColor;
})

const CardSwitcher = ({ id, switchCard }) => (
  <ul>
    <ThemeSwitcherStyle>
      <ThemeFontColor
        chosen={id === 1}
        onClick={(e) => switchCard(1, e)}>
        1枚目
      </ThemeFontColor>
    </ThemeSwitcherStyle>
    <ThemeSwitcherStyle>
      <ThemeFontColor
        chosen={id === 2}
        onClick={(e) => switchCard(2, e)}>
        2枚目
      </ThemeFontColor>
    </ThemeSwitcherStyle>
  </ul>
);

Comment.propTypes = {
  switchCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

Comment.defaultProps = {
  id: 1,
}

export default CardSwitcher;