import { useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ILoginCredentials } from "../store/types";
import { useActions } from "../../../hooks/useActions";
import { toast } from "react-toastify";

interface IAuthProvider {
  provider: string;
  token: string;
}

const LoginPage = () => {
  const { Login } = useActions();

  const handleGoogleLoginSuccess = (res: any) => {
    console.log("Login google result", res);
    const { credential } = res;
    console.log("Token Id", credential);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const credentials: ILoginCredentials = {
      email: data.get("email")!.toString(),
      password: data.get("password")!.toString(),
    };

    toast.success("Success");

    //Login(credentials);
  };

  //const divRef = useRef(null);

  useEffect(() => {
    // try {
    //   if (divRef.current) {
    //     const clientId =
    //       "870779684753-qd59ki7ujjm71sv0bt4okpsfmeln0mim.apps.googleusercontent.com";
    //     google.accounts!.id.initialize({
    //       client_id: clientId,
    //       callback: handleGoogleLoginSuccess,
    //     });
    //     google.accounts!.id.renderButton(divRef.current, {
    //       theme: "outline",
    //       size: "large",
    //       type: "standard",
    //       text: "signin",
    //     });
    //   }
    // } catch (error) {
    //   console.log("error", error);
    // }
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box
            sx={{ mb: 2 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {/* <div ref={divRef}></div> */}
          </Box>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
