import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin: 50px auto;
  padding: 24px 20px;
  background-color: rgba(203, 82, 251, 0.2);
  box-shadow: 5px 7px 9px rgba(86, 33, 110, 0.3);
  border-radius: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 8px;
  border-radius: 4px;
  /* background-color: #3affe9; */
  background: rgba(58, 255, 233, 0.2);
  border: 2px solid #cb52fb;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(58, 255, 233, 0.2);
  border: 2px solid #cb52fb;

  &:hover {
    color: #3affe9;
    background-color: #cb52fb;
  }
`;