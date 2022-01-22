import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Toggle = () => {
  return (
    <Container>
      <label className='toggle'>
        <input type="checkbox" />
        <span className='slider' />
      </label>
    </Container>
  );
};

export default Toggle;
