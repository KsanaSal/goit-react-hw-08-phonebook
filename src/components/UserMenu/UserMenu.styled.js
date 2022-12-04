import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 18px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(58, 255, 233, 0.2);
  border: 2px solid #cb52fb;

  &:hover {
    color: #3affe9;
    background-color: #cb52fb;
  }
`;
