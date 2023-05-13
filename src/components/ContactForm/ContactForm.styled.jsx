import { Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const Container = styled(Form)`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  padding-top: 0px;
  max-width: 100%;
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;

export const Input = styled(Field)`
  padding: 5px 10px;
  width: 100%;
  font-size: 14px;
  color: var(--primary);
  // border: 1 solid #2b2b2b;
  height: 40px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 7px;
  color: red;
`;

export const Btn = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 150px;
height: 40px;
background-color: #5d00ff;
color: #ffffff;
font-family: inherit;
border: none;
cursor: pointer;
transition: background-color 250ms linear;
&:hover,
&:focus {
    background-color: #2b2b2b;
}
`;
