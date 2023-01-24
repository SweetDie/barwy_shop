import { useEffect } from "react";
import "./App.css";

interface IAuthProvider {
  provider: string;
  token: string;
}

const App = () => {
  const handleLoginSuccess = (res: any) => {
    console.log("Login google result", res);
    const {credential} = res;
    console.log("Token Id", credential);
    
  };

  useEffect(() => {
    const clientId =
      "870779684753-qd59ki7ujjm71sv0bt4okpsfmeln0mim.apps.googleusercontent.com";
      window.google.accounts!.id.initialize({
      client_id: clientId,
      callback: handleLoginSuccess,
    });

    window.google.accounts!.id.renderButton(document.getElementById("loginGoogleBtn"),
    {theme: "outline", size: "Large"});

  }, []);

  return (
    <>
      <h1>Login google</h1>
      <div id="loginGoogleBtn"></div>
    </>
  );
};

export default App;
