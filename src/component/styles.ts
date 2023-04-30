import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  max-width: 600px;

  overflow: hidden;
`;

export const Options = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
`;

export const Option = styled.div`
  width: 100%;
  height: 100%;

  align-self: center;
  justify-self: center;
  
  color: rgba(255, 255, 255, 0.3);

  cursor: pointer;
`;

export const Toggle = styled.div`
  position: absolute;
  bottom: 1.5px;
  left: 0;

  display: flex;

  width: 100%;
  height: 6px;

  background-color: rgba(255, 255, 255, 0.3);

  border-radius: 10px;
`;

export const ToggleOption = styled.div`
  width: 100%;
  height: 100%;

  flex: 0.5;

  background-color: #ffae00;
  border-radius: 10px;
`;
