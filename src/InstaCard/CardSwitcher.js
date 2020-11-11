import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ThemeSwitcher = styled.li({
  padding: '5px',
  marginBottom: '7px'
})

const CardSwitcher = ({ id, switchCard }) => (
  <ul>
    <ThemeSwitcher>
      <a
        className={id === 1 ? "chosen" : "default"}
        onClick={(e) => switchCard(1, e)}>
        1枚目
      </a>
    </ThemeSwitcher>
    <ThemeSwitcher>
      <a
        className={id === 2 ? "chosen" : "default"}
        onClick={(e) => switchCard(2, e)}>
        2枚目
      </a>
    </ThemeSwitcher>
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