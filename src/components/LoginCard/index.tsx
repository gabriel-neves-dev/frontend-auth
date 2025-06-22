import {
  LoginWrapper,
  LoginCardContainer,

  LoginFormContainer,
  LoginForm,
  FormGroup,
  Input,
  Button,
  RememberMe,
} from "./styles";

const LoginCard = () => (
  <LoginWrapper>
    <LoginCardContainer>

      <LoginFormContainer>
        <LoginForm>
          <h2>Login</h2>
          <FormGroup>
            <label htmlFor="username">Username</label>
            <Input type="text" id="username" name="username" required />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" name="password" required />
          </FormGroup>
          <Button type="submit">Login</Button>
          <RememberMe>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Lembrar-me</label>
          </RememberMe>
        </LoginForm>
      </LoginFormContainer>
    </LoginCardContainer>
  </LoginWrapper>
);

export default LoginCard;
