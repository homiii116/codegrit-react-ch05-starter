import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

//色が反映されない
const CommenterName = styled.a({
}, ({ theme }) => {
  let darkTheme = []
  if(theme === 'dark') {
    darkTheme.push({ color: '#999' })
  }
  return darkTheme;
})

const Comment = ({ theme, username, comment }) => (
  <li className="poster-comment">
    <CommenterName theme={theme}>
      {username}
    </CommenterName>
    <span className="commenter-comment">
      {comment}
    </span>
  </li>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}

Comment.defaultProps = {
  username: "testuser",
  comment: "テストのコメント",
}

export default Comment;
