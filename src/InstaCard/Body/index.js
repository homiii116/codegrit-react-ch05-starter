import React from 'react';
import PropTypes from 'prop-types';
import BodyMain from './Main';
import MainImg from '../../images/image-one.jpg';
import styled from '@emotion/styled/macro';

const CardImageContainer = styled.div({
  width: '100%',
  margin: '0',
  padding: '0'
})

const CardImage = styled.img({
  height: '450px',
  width: '611px',
  border: '0',
  backgroundColor: '#dddddd'
})

const Body = ({ theme, data, chosenId }) => {
  console.log(chosenId);
  const { imageUrl } = data;
  return (
    <section className="card-body">
      <CardImageContainer>
        <CardImage alt="メイン画像" src={imageUrl} />
      </CardImageContainer>
      <BodyMain theme={theme} data={data} chosenId={chosenId} />
    </section>
  );
};

Comment.propTypes = {
  theme: PropTypes.string.isRequired,
  data: PropTypes.object,
}

Comment.defaultProps = {
  theme: "light",
  data: {
    imageUrl: MainImg
  }
}

export default Body;