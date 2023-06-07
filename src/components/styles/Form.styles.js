import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.ai};
  width: 450px;
  background-color: ${(props) => props.cl || "#ffffff"};
  border-radius: 10px;
  padding-top: 60px;
  padding: 40px;
  box-shadow: ${(props) =>
    props.shadow ? "0 0 10px rgba(0, 0, 0, 0.1)" : "none"};
  border: 1px solid #d2e9e9;
`;

export const Input = styled.input`
  width: ${(props) => props.wt};
  height: ${(props) => props.ht};
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
  border: ${(props) => (props.validated ? "2px solid green" : "none")};
`;

export const Button = styled.button`
  width: ${(props) => props.wt};
  height: ${(props) => props.ht};
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: #001021;
  }
`;

export const ResendButton = styled.button`
  width: ${(props) => props.wt || "40%"};
  height: ${(props) => props.ht || "40px"};
  padding: 10px;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  background-color: whitesmoke;
  color: black;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 20px auto;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: #3e38f5;
    color: white;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 3;
`;

export const Sublink = styled.p`
  font-size: ${(props) => props.fs};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
  text-align: ${(props) => props.ta};
  cursor: pointer;
  &:hover {
    color: #3e38f5;
  }
`;

export const ButtonContainer = styled.div``;
