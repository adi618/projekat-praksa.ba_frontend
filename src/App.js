import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./theme";
import Home from "./containers/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profil" exact element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
