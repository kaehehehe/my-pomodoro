import React from 'react';
import styled from 'styled-components';
import RestartBtn from './RestartBtn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Message = styled.span`
  margin-top: 30px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 80px;
`;

const RestartModal = () => {
  return (
    <Container>
      <Message>목표 달성! 대단해요!</Message>
      <RestartBtn />
    </Container>
  );
};

export default RestartModal;
