import styled from 'styled-components';

export const Form = styled.form`
  /* display: grid; */
  width: 320px;
  margin: 50px auto;
  padding: 24px 20px;
  background-color: rgba(203, 82, 251, 0.3);
  box-shadow: 5px 7px 9px rgba(86, 33, 110, 0.3);
  border-radius: 16px;
  border: 2px solid #cb52fb;
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
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #cb52fb;

  &:focus {
    outline: none;
    border-color: #80a3f9;
    box-shadow: 0 0 10px #80a3f9;
    background-color: #fff;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(58, 255, 233, 0.5);
  border: 2px solid #cb52fb;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    color: #3affe9;
    background-color: #cb52fb;
  }
`;
