import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 30px;
  outline: 1px solid black;
  border-radius: 10px;
`;
export const Label = styled.label`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const BtnSubmit = styled.button`
  font-size: 16px;
  font-weight: 500;
  width: auto;
  height: 30px;
  margin: 20px auto 0px auto;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  border: 1px solid green;
  border-radius: 10px;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background;
  transition-duration: 500ms;
  :hover {
    background: #3cb371;
    color: white;
  }
`;
export const Input = styled.input`
  margin-top: 10px;
  padding: 5px;
  height: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: border-color;
  transition-duration: 500ms;
  :focus {
    outline: none;
    border-color: green;
  }
  :hover {
    border-color: green;
  }
`;
