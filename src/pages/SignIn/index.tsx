import { Avatar, Button, TextField, FormControlLabel, Checkbox, Box, Container, styled } from '@mui/material';
import axios from 'axios';
import { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import { UserContext } from '../../contexts/UserContext';


export default function SignIn() {
  const { userData, setUserData } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleLogIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setDisabled(true)

		try {
      // const userData = await signIn(email, password);
      setUserData(userData);
      navigate('/profile');
    } catch (err) {
      toast.error('Não foi possível fazer o login! Tente novamente mais tarde');
    }
  };

  return (
      <Container maxWidth="xs">
        <LoginBox>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
          <h5>Já tem uma conta?</h5>
          <Box component="form" onSubmit={handleLogIn} noValidate sx={{ mt: 1 }}>
            <FormTextField
              color='secondary'
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nome de usuário"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <FormTextField
              color='secondary'
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Lembrar meus dados"
            />
            <LoginButton type="submit" variant="contained">Entrar</LoginButton>
            <LinkText to={"/sign-up"}>
              Não tem uma conta? Cadastre-se
            </LinkText>
          </Box>
        </LoginBox>
      </Container>
  );
}

const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

const LinkText = styled(Link)`
  text-decoration: none;
	color: #ffffff;
`;

const LoginBox = styled(Box)`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    font-size: 24px;
  }
`

const FormTextField = styled(TextField)`
  background-color: #151323;
  label {
    color: white;
  }
  input {
    color: white;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:active{
    box-shadow: 0 0 0 30px #a99cc2 inset;
  }
`