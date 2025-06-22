import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("src/assets/bg4.jpg") top/cover no-repeat;
`;

export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 480px;
  height: 576px;
  background: transparent;
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;



export const LoginFormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  h2 {
    color: #fff;
    font-weight: black;
  }

    
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 32px;

  & label {
    color: rgb(230, 230, 230);
    font-weight: 100;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 16px;
  background-color: transparent;
`;


export const Button = styled.button`
  padding: 12px;
  background-color: transparent;
  color: #fff;
  border: 2px solid rgb(148, 49, 254);
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(148, 49, 254, 0.1);
  }
`;

export const RememberMe = styled.div`
  display: flex;

  width: 100%;

  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  /* color: ; */
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #646cff;

    /* 
    Modern browsers
    Fallback for older browsers 
    */

    appearance: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: background 0.2s, border-color 0.2s;
    &:checked {
      background-color: #646cff;
      border-color: #646cff;
      box-shadow: inset 0 0 0 2px #fff;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.5);
    }
  }
  label {
    cursor: pointer;
    user-select: none;
    &:hover {
      color: #535bf2;
    }
  }
`;
