import { BrowserRouter } from "react-router";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import { setCredentials } from "./store/authSlice";

function App() {
  const { token, tokenData, logIn, logOut, isAuthenticated } =
    useContext(AuthContext);
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState();

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token, user: tokenData }));
      setAuthReady(true);
    }
  }, [token, tokenData, dispatch]);

  return (
    <BrowserRouter>
      {!token ? (<Button
        variant="contained"
        color="secondary"
        onClick={() => {
          logIn();
        }}
      >
        Log in
      </Button>) : (<div>
        <pre>{JSON.stringify(tokenData, null,2)}</pre>
        <pre>{JSON.stringify(token, null, 2)}</pre>
      </div>)}
      
    </BrowserRouter>
  );
}

export default App;
