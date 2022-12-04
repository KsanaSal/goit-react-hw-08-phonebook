import styled from 'styled-components';

export const Span = styled.span`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const FilterInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid #cb52fb;
  background-color: rgba(203, 82, 251, 0.3);
  box-shadow: 5px 7px 9px rgba(86, 33, 110, 0.3);
  border-radius: 8px;
  min-width: 550px;
`;

export const Input = styled.input`
  color: #010101;
  padding: 4px;
  /* margin-top: 10px; */
  outline: none;
  border: 2px solid #cb52fb;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  min-height: 30px;
  width: 250px;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #80a3f9;
    box-shadow: 0 0 10px #80a3f9;
    background-color: #fff;
  }
`;

export const WrapFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
