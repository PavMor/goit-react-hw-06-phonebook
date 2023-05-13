import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  color: var(--secondary);
  // text-shadow: var(--main-shadow);
`;

export const Input = styled.input`
  height: 40px;
  padding: 5px 10px;
  width: 75%;
  font-size: 16px;
  color: var(--primary);
  outline: none;
`;
