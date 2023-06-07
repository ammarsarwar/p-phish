import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const ErrorBox = styled.div`
  margin-bottom: 15px;
`;
export const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
`;
