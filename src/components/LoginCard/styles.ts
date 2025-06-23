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
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  box-shadow: 8px 8px 10px rgba(48, 8, 64, 0.2);
  overflow: hidden;
`;

export const LoginFormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  h1 {
    color: #fff;
    font-weight: black;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px;

  & label {
    color: rgb(230, 230, 230);
    font-weight: 400;
  }

  h4 {
    color: rgb(230, 230, 230);
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  a {
    cursor: pointer;
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    cursor: pointer;

    color: rgb(144, 209, 255);
    transition: color 0.2s;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 10px 24px 10px 24px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  font-size: 16px;
  background-color: transparent;
  color: #fff;
  caret-color: #fff;
  z-index: 1;

  &:focus {
    border-color: rgb(144, 209, 255);
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
  }
`;



export const Button = styled.button`
  padding: 12px;
  background-color: transparent;
  color: #fff;
  border: 2px solid rgba(144, 209, 255, 0.7);
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(144, 209, 255, 0.7);
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

    &:hover {
      border-color: rgb(144, 209, 255);
    }
    &:checked {
      background-color: rgb(144, 209, 255);
      border-color: rgb(144, 209, 255);
      box-shadow: inset 0 0 0 2px #fff;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.5);
    }
  }
  label {
    user-select: none;
    &:hover {
      cursor: pointer;
      color: rgb(249, 228, 255);
      transition: background 0.2s, border-color 0.2s;
    }
  }
`;
