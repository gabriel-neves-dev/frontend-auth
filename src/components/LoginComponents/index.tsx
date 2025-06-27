import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
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
import { login } from "../../services/api";

// Interface para o estado de erro
interface LoginError {
  message: string;
}

const LoginCard = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<LoginError | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { token } = await login(email, password);
      localStorage.setItem("token", token);
      setError(null);
      navigate("/dashboard");
      alert("Login bem-sucedido!");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Erro ao fazer login";
      setError({ message: errorMessage });
      console.error(err);
    }
  };

  return (
    <LoginWrapper>
      <LoginCardContainer>
        <LoginFormContainer>
          <LoginForm onSubmit={handleSubmit}>
            <h1>Login</h1>
            <FormGroup>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="E-mail"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            {error && <p style={{ color: "red" }}>{error.message}</p>}
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
};

export default LoginCard;