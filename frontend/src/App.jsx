import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Button, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import { setCredentials } from "./store/authSlice";
import ActivityForm from "./components/ActivityForm";
import ActivityDetail from "./components/ActivityDetail";
import ActivityList from "./components/ActivityList";

const ActivitiesPage = () => {
  return (<Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
    <ActivityForm onActivitiesAdded={() => window.location.reload()} />
    <ActivityList />
  </Box>
  );
};

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
      {!token ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            logIn();
          }}
        >
          Log in
        </Button>
      ) : (
        // <div>
        //   <pre>{JSON.stringify(tokenData, null, 2)}</pre>
        //   <pre>{JSON.stringify(token, null, 2)}</pre>
        // </div>

        <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
          <Routes>
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activities/:id" element={<ActivityDetail />} />

            <Route
              path="/"
              element={
                token ? (
                  <Navigate to="/activities" replace />
                ) : (
                  <div>Welcome, Please Log in.</div>
                )
              }
            />
          </Routes>
        </Box> 
      )}
    </BrowserRouter>
  );
}

export default App;
