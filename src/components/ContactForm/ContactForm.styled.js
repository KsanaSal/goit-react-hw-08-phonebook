import styled from 'styled-components';
import { Field as FormikField, Form as FormikForm } from 'formik';

export const Field = styled(FormikField)`
  color: #010101;
  padding: 4px;
  margin-top: 10px;
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

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: rgba(203, 82, 251, 0.3);
  box-shadow: 5px 7px 9px rgba(86, 33, 110, 0.3);
  border: 2px solid #cb52fb;
  border-radius: 8px;
  width: 550px;
  min-height: 150px;
  padding: 10px;
`;

export const Label = styled.label`
  font-size: 24px;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  max-width: 170px;
  border: 2px solid #cb52fb;
  border-radius: 4px;
  font-size: 18px;
  padding: 8px 12px;
  margin-top: 20px;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(58, 255, 233, 0.5);

  &:hover {
    color: #3affe9;
    background-color: #cb52fb;
  }
`;
