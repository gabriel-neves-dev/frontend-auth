import { Link } from "react-router-dom";
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
          <h1>Login</h1>
          <FormGroup>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="E-mail"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
            />
          </FormGroup>
          <Button type="submit">Login</Button>
          <RememberMe>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Lembrar-me</label>
          </RememberMe>
          <h4>
            Não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </h4>
        </LoginForm>
      </LoginFormContainer>
    </LoginCardContainer>
  </LoginWrapper>
);

export default LoginCard;
