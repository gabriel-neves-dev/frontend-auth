import styled from 'styled-components';


export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("src/assets/bg4.jpg") top/cover no-repeat;
`;

export const RegisterCardContainer = styled.div`
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

export const RegisterFormContainer = styled.div`
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



export const RegisterForm = styled.form`
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
  gap: 24px;
`;

export const Input = styled.input`
  padding: 10px 16px 10px 16px;
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
