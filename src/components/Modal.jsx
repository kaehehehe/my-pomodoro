import React from 'react';
import styled from 'styled-components';
import { Background } from '../styles/background';

const Container = styled(Background)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 420px;
  padding: 18px;
  margin: 0 15px;
  border-radius: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.modal};
`;

const Text = styled.span`
  font-size: 35px;
  margin-bottom: 15px;
`;

const Buttons = styled.div`
  display: flex;
`;

const YesBtn = styled.button`
  width: 70px;
  height: 40px;
  line-height: 45px;
  font-size: 28px;
  margin-right: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.modalBtn};
  color: ${({ theme }) => theme.modalBtnText};
`;

const NoBtn = styled(YesBtn)`
  margin-right: 0;
`;

const Modal = ({ setOpen, reset }) => {
  const handleClickBackground = (e) => {
    if (e.target.id === 'bg') {
      setOpen(false);
    }
  };

  const handleYesBtn = () => {
    reset();
  };

  const handleNoBtn = () => {
    setOpen(false);
  };

  return (
    <Container id="bg" onClick={handleClickBackground}>
      <Card>
        <Text>
          벌써 그만두시나요?
          <br />
          포모도로 타이머는 25분 동안 집중하는 것이 원칙이기에 일시 정지 기능을
          지원하지 않습니다.
          <br />
          타이머를 초기화하시겠습니까?😢
        </Text>
        <Buttons>
          <YesBtn onClick={handleYesBtn}>네</YesBtn>
          <NoBtn onClick={handleNoBtn}>아니요</NoBtn>
        </Buttons>
      </Card>
    </Container>
  );
};

export default Modal;
