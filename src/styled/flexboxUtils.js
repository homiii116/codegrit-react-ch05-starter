import React from 'react';
import styled from '@emotion/styled/marco';
import PropTypes from 'prop-types';

const FlextListContainer = styled.ul({
  display: 'flex'
}, ({ direction }) => {
  let flexStyle = [];
  if(direction === 'colum') {
    flexStyle.push({ flexDirection: 'colum'})
  }
  return flexStyle;
})

export default FlextListContainer;