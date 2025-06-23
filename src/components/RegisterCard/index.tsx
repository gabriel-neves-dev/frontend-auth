import {
  RegisterWrapper,
  RegisterCardContainer,
  RegisterForm,
  FormGroup,
  Input,
  Button,
  RegisterFormContainer,
} from "./styles";

const RegisterCard = () => {
  return (
    <div>
      <RegisterWrapper>
        <RegisterCardContainer>
          <RegisterFormContainer>
            <RegisterForm>
              <h1>Register</h1>
              <FormGroup>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  required
                />

                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="E-mail"
                  required
                />

                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Senha"
                  required
                />
                <Input
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirme sua senha"
                  required
                />
              </FormGroup>
              <Button type="submit">Registrar-se</Button>
            </RegisterForm>
          </RegisterFormContainer>
        </RegisterCardContainer>
      </RegisterWrapper>
    </div>
  );
};

export default RegisterCard;
