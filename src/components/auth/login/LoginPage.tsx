import { useEffect, useReducer, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IAuthProvider, ILoginCredentials } from "../store/types";
import { useActions } from "../../../hooks/useActions";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const LoginPage = () => {
  const { Login, LoginWithProvider } = useActions();

  const handleGoogleLoginSuccess = async (res: any) => {
    const { credential } = res;

    const googleProvider: IAuthProvider = {
      provider: "Google",
      token: credential,
    };

    try {
      const message: any = await LoginWithProvider(googleProvider);
      toast.success(message);
    } catch (error: any) {
      toast.error(error);
    }
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const credentials: ILoginCredentials = {
      email: data.get("email")!.toString(),
      password: data.get("password")!.toString(),
    };

    try {
      const message: any = await Login(credentials);
      toast.success(message);
    } catch (error: any) {
      toast.error(error);
    }
  };

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const clientId =
        "870779684753-qd59ki7ujjm71sv0bt4okpsfmeln0mim.apps.googleusercontent.com";
      google.accounts!.id.initialize({
        client_id: clientId,
        callback: handleGoogleLoginSuccess,
      });
      google.accounts!.id.renderButton(divRef.current, {
        theme: "outline",
        size: "large",
        type: "standard",
        text: "signin",
      });
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вхід
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Електронна адреса"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запам'ятати мене"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Увійти
          </Button>
          <Box
            sx={{ mb: 2 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <div ref={divRef}></div>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link
                to="/"
                style={{ textDecoration: "underline", color: "red" }}
              >
                Забули пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/register"
                style={{ textDecoration: "underline", color: "red" }}
              >
                Немає облікового запису?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
