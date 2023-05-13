import styled from '@emotion/styled';

export const Contacts = styled.ul`
  margin: 0 auto;
  // max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const ContactsItem = styled.li`
  padding: 10px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const Name = styled.span`
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 700;
`;

export const Number = styled.span`
  text-align: right;

  font-weight: 700;
  font-size: 16px;
  color: black;
  flex-basis: 33.333%;
`;

export const Btn = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
padding: 10px;
border: none;
background-color: #2b2b2b;
color: #ffffff;
cursor: pointer;
transition: background-color 250ms linear;
&:hover,
&:focus {
    background-color: #5d00ff;
}
`;

export const Icon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #5d00ff;
    color: #ffffff;
    margin-right: 30px;
    padding: 15px;
`;